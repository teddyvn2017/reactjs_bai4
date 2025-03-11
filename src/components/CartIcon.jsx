import { BsBag } from "react-icons/bs";
import useCart from '../hooks/useCart'; // ✅ Đúng đường dẫn import

const CartIcon = () => {
    const { cart } = useCart(); // Lấy giỏ hàng từ context
    const cartCount = cart ? cart.length : 0;
    // console.log("Số lượng sản phẩm trong giỏ hàng:", cartCount);

    return (
        <a href="/gio-hang" className="gio__hang relative">
            <BsBag className="text-2xl" />
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                    {cartCount}
                </span>
            )}
        </a>
    );
};

export default CartIcon;
