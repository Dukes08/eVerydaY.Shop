import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function Navbar(){
    const context = useContext(ShoppingCartContext) //imported to read the value of the global context, aka, count

    const activeStyle = "underline underline-offset-4";
    return(
        <nav className=" flex justify-between fixed w-full px-8 py-5 text-sm top-0">
            <ul className="flex gap-3">
                <li className="font-semibold text-l">
                    <NavLink to = '/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/'className={({isActive}) => isActive? activeStyle: undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/clothes' className={({isActive}) => isActive? activeStyle: undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/electronics' className={({isActive}) => isActive? activeStyle: undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/furniture' className={({isActive}) => isActive? activeStyle: undefined}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/toys'className={({isActive}) => isActive? activeStyle: undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/others'className={({isActive}) => isActive? activeStyle: undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex gap-3">
                <li>
                    <NavLink to = '/'>
                        hugo@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-orders' className={({isActive}) => isActive? activeStyle: undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-account'className={({isActive}) => isActive? activeStyle: undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/sign-in' className={({isActive}) => isActive? activeStyle: undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex justify-center">
                         
                    <ShoppingCartIcon className="w-6 h-6"/> 
                    <div>
                    {/* {context.count} */}
                    </div>
                    
                    {/* with this we can see the value of the actual counter change by the + on the cards */}
                 
                </li>
                
            </ul>
            
        </nav>
    )
}

export default Navbar