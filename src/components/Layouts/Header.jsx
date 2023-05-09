import { Link } from "react-router-dom"
import { AiOutlineSetting, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx"
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { useCart } from "../../context";


export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [hideSearch, setHideSearch] = useState(false);
  const [dropdown, setDropdown ] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <header className="w-full"> 
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src="https://webaiid.com/assets/img/logo-web.png" className="h-14 mr-3" alt="Flowbite Logo" />
          </Link>
          <div className="flex items-center">
            <span onClick={()=> setDarkMode(!darkMode)} className="mr-6 text-2xl  text-gray-500 dark:text-white hover:underline hover:text-gray-700 cursor-pointer"><AiOutlineSetting/></span>
            <span onClick={() => setHideSearch(!hideSearch)} className="mr-6 text-2xl  text-gray-500 dark:text-white hover:underline hover:text-gray-700 cursor-pointer"><AiOutlineSearch/>  </span>
            <Link to="/cart" className="mr-6 text-2xl  text-gray-500 dark:text-white hover:underline hover:text-gray-700 cursor-pointer">
            <span className="bi bi-cart relative"> 
            <span className="btn-round absolute -top-2 -right-2 bg-rose-400 rounded-full text-black text-sm"> 
               {cartList.length}
             </span> 
             </span>
            </Link>
            <span onClick={() => setDropdown(!dropdown)} className="mr-6 text-2xl relative text-gray-500 dark:text-white hover:text-gray-700 cursor-pointer"><RxAvatar/>
            { dropdown && (token ? <DropdownLoggedIn /> :<DropdownLoggedOut/>) }
            </span>
            
          </div>
        </div>
       
      </nav>
       { hideSearch && <Search setHideSearch={setHideSearch} />}
       
    </header>
  )
}
