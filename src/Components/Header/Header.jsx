import { Link } from "react-router-dom";
const Header =()=>{
    return(

        <>
        <header>
            <div className="header-area bg-slate-600 py-3 shadow-md">
                <div className="container w-10/12 mx-auto flex justify-between">
                    <div className="logo">
                        <img src="https://devzone.com.bd/wp-content/uploads/2024/08/office-devzone-logo2.png" alt="" />
                    </div>
                    <div className="menu-area">
                        <ul className="flex">
                            <li className="px-3 py-2 hover:first-letter:text-red-800 text-white text-base"><Link to="/">Home</Link></li>
                            <li className="px-3 py-2 hover:first-letter:text-red-800 text-white text-base"><Link to="/about">About us</Link></li>
                            <li className="px-3 py-2 hover:first-letter:text-red-800 text-white text-base"><Link to="/team">Team</Link></li>
                            <li className="px-3 py-2 hover:first-letter:text-red-800 text-white text-base"><Link to="/blog">Blog</Link></li>
                            <li className="px-3 py-2 hover:first-letter:text-red-800 text-white text-base"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
export default Header;