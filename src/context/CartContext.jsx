import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Lỗi khi parse dữ liệu từ localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            const currentCart = JSON.stringify(cart);
            const savedCart = localStorage.getItem("cart");

            if (currentCart !== savedCart) {
                localStorage.setItem("cart", currentCart);
            }
        } catch (error) {
            console.error("Lỗi khi lưu vào localStorage:", error);
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {

            //trả về vị trí của sản phẩm trong giỏ hàng
            const existingProductIndex  = prevCart.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                // Nếu sản phẩm đã có, tăng quantity
                return prevCart.map((item, index) => {
                    index = existingProductIndex ? {...item, quantity: item.quantity + 1} : item
                });
            }
            // const updatedCart = [...prevCart, product];
            // console.log("Giỏ hàng sau khi thêm sản phẩm:", updatedCart);
            // return updatedCart;

            else {
                // Nếu sản phẩm chưa có, thêm với quantity = 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeItem = (id) => {    
        // console.log(id);
        setCart((prevCart) => {
            //sao chép mảng mới không chứa item.id đã xóa khỏi giỏ hàng            
            const updatedCart = prevCart.filter((item) => item.id !== id);
            //gán lại mảng mới với id xóa khỏi giỏ hàng
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    
    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) => 
                prevCart.map((item) => item.id === id ? {...item, quantity: newQuantity} : item)
            );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,removeItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
