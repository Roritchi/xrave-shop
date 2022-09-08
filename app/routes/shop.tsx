import { Link, Outlet } from "@remix-run/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // TODO: Load Cart from LocalStorage & Server, then merge and push to LocalStorage & Server

        // * Load Info from LocalStorage
        function onStorageChange() {
            if(localStorage.getItem('cart')) setCart(c => c.concat(JSON.parse(localStorage.getItem('cart') as string)));
        }

        window.addEventListener('storage', onStorageChange);
        onStorageChange()

        return () => {
            window.removeEventListener('storage', onStorageChange);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartCount(cart.length);
    }, [cart])

    useEffect(() => {
        // TODO: Play Animation
        
    }, [cartCount])

    return (
    <div>
        <Link to={{ pathname: '/shop/cart' }} className="fixed z-50 right-10 top-8 text-black w-12 h-12 p-3 rounded-full bg-[#e2eced] shadow-lg">
            <FontAwesomeIcon className="w-full h-full" icon={faShoppingBasket} />
            { cartCount ?
                <div className="w-5 h-5 rounded-full bg-[#c44] left-0 -bottom-0.5 absolute text-white text-sm">
                    <span className="absolute right-1.5 bottom-[1px] font-bold">{cartCount}</span>
                </div> : null }
        </Link>
        <Outlet />
    </div>
    );
}
