// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "./Images/logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [opeNavberMenu, setOpenNavbarmenu] = useState(false);
//   const routes = [
//     { id: 1, name: "Home", link: "/" },
//     { id: 2, name: "About", link: "/about" },
//     { id: 3, name: "Pages", link: "/booking-details" },
//     { id: 4, name: "Blog", link: "/blogs" },
//     { id: 5, name: "Contact", link: "/contact" },
//   ];
//   return (
//     <div className="navbar top-0 left-0 bottom-0 right-0 sticky z-40 bg-[#1f252e]   md:px-[15px] ">
//       <nav className="  ">
//         <div
//           className="md:hidden pl-4 "
//           // onClick={() => setOpenNavbarmenu(!opeNavberMenu)}
//         >
//           {opeNavberMenu ? (
//             <div className=" flex justify-end absolute z-40 duration-500 ease-in">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="w-6 h-6"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                   onClick={() => setOpenNavbarmenu(false)}
//                 />
//               </svg>
//             </div>
//           ) : (
//             <div className=" flex justify-between py-[22px]">
//               <Link to="/" className=" md:hidden">
//                 <img src={logo} alt="" />
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="3"
//                   stroke="#fff"
//                   class="w-10 h-10"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     onClick={() => setOpenNavbarmenu(!opeNavberMenu)}
//                   />
//                 </svg>
//               </div>
//             </div>
//           )}
//         </div>

//         <ul
//           className={` md:flex md:justify-between md:item-center md:static text-lg font-semibold md:bg-transparent md:mt-0 absolute w-full duration-500 ease-in flex ${
//             opeNavberMenu && "right-[-10px] bg-gray-400"
//           }`}
//         >
//           <Link to="/" className=" hidden  lg:inline-block my-auto">
//             <img src={logo} alt="" />
//           </Link>
//           <div className="md:flex  hidden lg:visible">
//             {routes.map((route) => (
//               <div className=" md:flex md:justify-between " key={route.id}>
//                 <li className="text-white hover:text-[#ffa903] my-auto">
//                   <Link to={route.link}>{route.name}</Link>
//                 </li>
//               </div>
//             ))}
//             <li className="text-white my-auto">
//               <Link to="/">USD</Link>
//             </li>
//             <li className="text-white my-auto ">
//               <Link to="/" className="border rounded-full px-2 py-1">
//                 ?
//               </Link>
//             </li>

//             <div className="flex">
//               <li className="">
//                 <Link to="/signup">
//                   <button className="text-[#2a2a2a]  text-[16px] py-[16px] px-[25px] bg-white  hover:bg-[#ffa903] uppercase border hover:border-[#bd8e32] rounded-sm font-bold">
//                     Register
//                   </button>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link to="/signin">
//                   <button className="text-[#2a2a2a] md:-ml-6  text-[16px] py-[16px] px-[25px] bg-[#ffa903]  hover:bg-white uppercase border-[#ffa903] hover:border-white rounded-sm font-bold">
//                     Sign in
//                   </button>
//                 </Link>
//               </li>
//             </div>
//           </div>
//           {opeNavberMenu && (
//             <div className="md:flex  mt-[200px]">
//               {routes.map((route) => (
//                 <div
//                   className=" md:flex md:justify-between pl-[45%] "
//                   key={route.id}
//                 >
//                   <li className="text-white hover:text-[#ffa903] my-auto">
//                     <Link to={route.link}>{route.name}</Link>
//                   </li>
//                 </div>
//               ))}
//               <div className="flex justify-center items-center">
//                 <li className="text-white my-auto">
//                   <Link to="/">USD</Link>
//                 </li>
//                 <li className="text-white my-auto ">
//                   <Link to="/" className="border rounded-full px-2 py-1">
//                     ?
//                   </Link>
//                 </li>
//               </div>

//               <div className="flex items-center justify-center">
//                 <li className="">
//                   <Link to="/signup">
//                     <button className="text-[#2a2a2a]  text-[16px] py-[8px] px-[10px] bg-white  hover:bg-[#ffa903] uppercase border hover:border-[#bd8e32] rounded-sm font-bold">
//                       Register
//                     </button>
//                   </Link>
//                 </li>
//                 <li className="">
//                   <Link to="/signin">
//                     <button className="text-[#2a2a2a]   text-[16px] py-[8px] px-[10px] bg-[#ffa903]  hover:bg-white uppercase border-[#ffa903] hover:border-white rounded-sm font-bold">
//                       Sign in
//                     </button>
//                   </Link>
//                 </li>
//               </div>
//             </div>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import CrossIcon from "./Images/cross-23.svg";
import Logo from "./Images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [btnActive, setButtonActive] = useState(0);
  const btnToggle = () => {
    if (btnActive === 1) {
      setButtonActive(0);
    } else {
      setButtonActive(1);
    }
  };
  return (
    <nav className="bg-[#1f252e] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          onClick={() => setButtonActive(0)}
          className="flex items-center"
        >
          {/* <h1>
            <span className="text-[#7158e2] text-[28px] font-bold">
              sebokDas
            </span>
            <span className="text-black text-[32px] font-bold">.</span>
          </h1> */}
          <img src={Logo} alt="" />
        </Link>
        <button
          type="button"
          onClick={btnToggle}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {btnActive === 0 ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <img className="w-6 h-6" src={CrossIcon} alt="" />
          )}
        </button>

        <div
          className={`w-full md:block md:w-auto ${
            btnActive === 0 && "hidden"
          } `}
          id="navbar-default"
        >
          <ul className="flex flex-col lg:items-center p-4 mt-4 border border-gray-100 rounded-lg bg-[#1f252e] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#1f252e] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                onClick={() => setButtonActive(0)}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4  text-[#ffa903]  rounded md:bg-transparent md:text-[#ffa903] md:p-0 dark:text-white"
                    : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa903] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                onClick={() => setButtonActive(0)}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-[#ffa903]  rounded md:bg-transparent md:text-[#ffa903] md:p-0 dark:text-white"
                    : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa903] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="booking-details"
                onClick={() => setButtonActive(0)}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-[#ffa903]  rounded md:bg-transparent md:text-[#ffa903] md:p-0 dark:text-white"
                    : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa903] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blogs"
                onClick={() => setButtonActive(0)}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-[#ffa903]  rounded md:bg-transparent md:text-[#ffa903] md:p-0 dark:text-white"
                    : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa903] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                onClick={() => setButtonActive(0)}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-[#ffa903]  rounded md:bg-transparent md:text-[#ffa903] md:p-0 dark:text-white"
                    : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa903] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Contact
              </NavLink>
            </li>
            <ul className="flex items-center gap-1">
              <li className="">
                <Link to="/signup">
                  <button className="text-[#2a2a2a]  text-[16px] py-[8px] px-[10px] bg-white  hover:bg-[#ffa903] uppercase border hover:border-[#bd8e32] rounded-sm font-bold">
                    Register
                  </button>
                </Link>
              </li>
              <li className="">
                <Link to="/signin">
                  <button className="text-[#2a2a2a]   text-[16px] py-[8px] px-[10px] bg-[#ffa903]  hover:bg-white uppercase border-[#ffa903] hover:border-white rounded-sm font-bold">
                    Sign in
                  </button>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
