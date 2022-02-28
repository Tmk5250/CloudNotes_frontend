import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserState";
import { getUser } from "../Context/Fetch";

export default function Navbar() {
  const [menu, setmenu] = useState("hidden");
  const context = useContext(UserContext);
  const { theme, settheme, loginState, setloginState } = context;

  useEffect(() => {
    getUser().then((user) => {
      console.log(user.User.name, user.User.email, user.User.date);
      if (user.success === true) {
        setloginState(true);
        console.log("got user");
      }
    });
    if (theme === false) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "white";
    }
  }, [theme]);

  return (
    //    😀 ***********Elememt name*********** => start of element
    //    😀 -----------Elememt name----------- => end of element
    <>
      <nav className=" fixed top-0 left-0 right-0 z-10 bg-slate-50 dark:bg-[#121416] font-mono shadow-sm dark:shadow drop-shadow shadow-slate-100">
        <div className=" relative flex items-center justify-between  h-[9vh]  max-w-8xl mx-4  ">
          {/* ***********Logo and menu(on left)*********** */}
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <div className="flex-shrink-0 flex h-fit items-center ">
              {/* logo */}
              <img className="  h-10 w-auto " src={logo} alt="Workflow" />
              {/* Title cloud notes (Visible at lg  screen) */}
              <div className=" ml-2 hidden lg:flex">
                <h1 className="text-2xl tracking-tighter first-letter:text-blue-400 first-letter:text-3xl text-black dark:text-white font-mono font-bold">
                  Cloud
                </h1>
                <h1 className="text-2xl tracking-tighter ml-1 first-letter:text-blue-400 first-letter:text-3xl text-black dark:text-white font-mono font-bold">
                  notes
                </h1>
              </div>
            </div>
            {/* menu options */}
            <div className="hidden sm:flex items-center sm:ml-2 lg:ml-4">
              <div className="flex items-center space-x-4 sm:space-x-1 text-lg">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-zinc-800 hover:text-white" */}
                <Link
                  to="/"
                  className=" text-zinc-900 text-xl hover:bg-zinc-200 hover:text-gray-700  dark:text-gray-200 dark:hover:bg-zinc-800 dark:hover:text-white rounded-md px-2 py-1 lg:px-3 lg:py-2  font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/notes"
                  className=" text-gray-900 text-xl hover:bg-zinc-200 hover:text-gray-700  dark:text-gray-200 dark:hover:bg-zinc-800 dark:hover:text-white rounded-md px-2 py-1 lg:px-3 lg:py-2  font-semibold"
                >
                  Notes
                </Link>
                <Link
                  to="project"
                  className=" text-gray-900 text-xl hover:bg-zinc-200 hover:text-gray-700  dark:text-gray-200 dark:hover:bg-zinc-800 dark:hover:text-white rounded-md px-2 py-1 lg:px-3 lg:py-2  font-semibold"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
          {/* -----------Logo and menu(on left)-----------*/}

          {/* ***********Buttons Menu (on right)*********** */}
          <div className="flex  flex-row items-center">
            {/* login button */}
            <div>
              <Link
                to={"/login"}
                type="button"
                className={`hidden ${
                  loginState ? "sm:hidden" : "sm:flex"
                } bg-slate-100  text-blue-800 border-blue-700 items-center justify-center focus:outline-none focus:ring-1 focus:ring-offset-1/2 focus:ring-offset-gray-800 focus:ring-blue-500 hover:bg-gray-200 text-sm  h-7 w-14 border-2 rounded-md font-medium lg:text-lg  lg:h-10 lg:w-24 lg:border-2 lg:rounded-md lg:font-medium`}
                id="user-menu-button"
              >
                login
              </Link>
            </div>
            {/* signUp button */}
            <div>
              <Link
                to={"/signup"}
                type="button"
                className={`hidden ${
                  loginState ? "sm:hidden" : "sm:flex"
                } bg-blue-500 ml-3  text-white items-center justify-center  focus:outline-none focus:ring-1 focus:ring-offset-1/2 focus:ring-offset-gray-800 focus:ring-white hover:bg-blue-600 text-sm  h-7 w-14 rounded-md font-medium lg:text-lg  lg:h-10 lg:w-24  lg:rounded-md lg:font-medium `}
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                SignUp
              </Link>
            </div>
            {/* User */}
            <div className="flex items-center">
              <button className={`h-7 w-7 sm:h-10 sm:w-10 `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-fit w-fit bg-transparent text-blue-500 bg-slate-100 dark:text-slate-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              </button>
            </div>

            {/* theme toggle button */}
            <label htmlFor="toggle" className="flex ml-3">
              <input
                onClick={() => {
                  settheme((prevtheme) => !prevtheme);
                }}
                className="peer hidden"
                type="checkbox"
                name="theme_toggle"
                id="toggle"
                defaultChecked={theme ? false : true}
              />
              <div className="flex items-center bg-blue-400 peer-checked:bg-slate-300 rounded-full h-5 w-9 p-0.5 lg:h-7   lg:w-12 lg:p-1 ">
                <div className="flex w-4 h-4 lg:w-5 lg:h-5 toggle-dot rounded-full justify-center items-center bg-white transform duration-300 ease-in-out"></div>
              </div>
            </label>
            {/*📱 Mobile menu button (for sm screen and below) */}
            {/* ☰ button (visible before click)*/}
            <button
              type="button"
              onClick={() => {
                menu === "hidden" ? setmenu("flex") : setmenu("hidden");
              }}
              className=" sm:hidden ml-2 inline-flex items-center justify-center p-1 rounded-md text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none absolute left-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menu === "hidden"? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* ❌ button (visible before click)*/}
              <svg
                className={`${menu} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* -----------Buttons Menu (on right)------------ */}

        {/* ************Mobile menu (show/hide based on menu state.)************ */}
        <div className={`sm:hidden ${menu}  `} id="mobile-menu">
          <div className="flex  w-full flex-col px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-zinc-800 hover:text-white" */}
            <Link
              onClick={() => {
                setmenu("hidden");
              }}
              to="/"
              className="flex w-full dark:text-gray-300 border-b-[1px]  border-gray-300 dark:border-zinc-300 hover:bg-slate-100 text-gray-700  hover:text-blackdark:hover:bg-zinc-800 dark:hover:text-white  px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setmenu("hidden");
              }}
              to="/notes"
              className="flex w-full dark:text-gray-300 border-b-[1px]  border-gray-300 dark:border-zinc-300  hover:bg-slate-100 text-gray-700 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white  px-3 py-2 text-base font-medium"
            >
              Notes
            </Link>
            <Link
              onClick={() => {
                setmenu("hidden");
              }}
              to="project"
              className="flex w-full dark:text-gray-300 border-b-[1px]  border-gray-300 dark:border-zinc-300  hover:bg-slate-100 text-gray-700 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white  px-3 py-2 text-base font-medium"
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                setmenu("hidden");
              }}
              to="/signUp"
              className="flex w-full dark:text-gray-300 hover:bg-slate-100  dark:border-zinc-300  text-gray-700 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white  px-3 py-2 text-base font-medium"
            >
              SignUp
            </Link>
          </div>
        </div>
        {/* -----------Mobile menu (show/hide based on menu state.)----------- */}
      </nav>
      <Outlet />
      {/* <Notepad /> */}
    </>
  );
}
