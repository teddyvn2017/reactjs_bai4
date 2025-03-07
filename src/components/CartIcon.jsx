import { BsBag } from "react-icons/bs";

const CartIcon = ({cartCount}) => {
  return (
    <a href="/gio-hang" className="gio__hang relative">
        <BsBag className="text-2xl" />
        {
            cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                    {cartCount}
                </span>
            )
        }
    </a>
  )
}

export default CartIcon