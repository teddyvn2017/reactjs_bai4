import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
import useCart from '../hooks/useCart'; // Import useCart

const CartPage = () => {

    const { cart,removeItem,updateQuantity } = useCart(); // Lấy cart từ context

    useEffect(() => {
        document.title = "Giỏ hàng - FuniExpet";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = "Chung toi cung cap noi that gia re, phong cach Chau Au, ben gi";
        } else {
            const newMeta = document.createElement('meta');
            newMeta.name = "description";
            newMeta.content = "Chung toi cung cap noi that gia re, phong cach Chau Au, ben gi";
            document.head.appendChild(newMeta);
        }
    },);

    return (
        <Layout>
            <section className="mt-12 py-16">
                <div className="grid container max-w-[1280px] mx-auto px-4">
                    <h2 className='text-3xl text-black mb-6'>Giỏ hàng</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 shadow-md rounded-lg">
                            <thead className="border-b">
                                <tr className="bg-gray-100 text-left text-gray-700">
                                    <th className="p-4">#</th>
                                    <th className="p-4">Tên sản phẩm</th>
                                    <th className="p-4">Đơn giá</th>
                                    <th className="p-4">Số lượng</th>
                                    <th className="p-4">Thành tiền</th>
                                    <th className="p-4 text-center">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-400 px-8">
                                {/* thứ tự bắt buộc item trước sau đó là index - vị trí của phần tử trong mảng */}
                                {cart.map((item,index) => (
                                    <tr key={item.id} className="border-t border-gray-300">
                                        {/* Số thứ tự giỏ hàng*/}
                                        <td className="p-4">{index + 1}</td>
                                        <td className="p-4 flex items-center space-x-4 px-8">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                                            <span>{item.name}</span>
                                        </td>
                                        <td className="p-4">${item.price}</td>
                                        <td className="p-4">
                                            <input
                                                type="number"
                                                min="1"                                                
                                                value={item.quantity} // Giả sử item có thuộc tính quantity
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="w-12 border rounded p-1 text-center"
                                            />
                                        </td>
                                        <td className="p-4 font-semibold">${(item.price*item.quantity).toFixed(2)}</td> {/* Giả sử item có thuộc tính quantity */}
                                        <td className="p-4 text-center">
                                            <button className="bg__primary text-white px-4 py-2 rounded hover:bg__vang_nhat hover:cursor-pointer text-base"                                            
                                                //onClick={removeItem(item.id)} phải dùng arrow function
                                                //  như bên dưới khi dùng hàm có tham số
                                                onClick ={() => removeItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='flex justify-start mt-8'>
                            <button className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-500 hover:cursor-pointer">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CartPage;