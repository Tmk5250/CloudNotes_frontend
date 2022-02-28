import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Context/Fetch";
import { UserContext } from "../Context/UserState";

export default function Login() {
  document.body.style.backgroundColor = "white";

  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user, setuser } = context;

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await login(user.email, user.password);
    if (response.success === true) {
      navigate("/");
      localStorage.setItem(`token`, response.authToken)
    } else {
      alert("error");
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    setuser({ ...user, [event.target.name]: value });
  };
  
  return (
    <>
      <div className="flex absolute top-[7%] h-[90vh] right-0 left-0 flex-col font-serif justify-center items-center">
        <div className=" flex flex-col items-center justify-center w-[68%] h-fit sm:w-[50%]  lg:w-[33%]   mt-7  ">
          <div className=" p-4 sm:p-6 w-full h-full  rounded-lg border-[0.2px] shadow-lg shadow-zinc-400 border-zinc-300  lg:p-6 dark:shadow-none dark:border-black dark:bg-[#15171a] ">
              <h3 className=" text-xl sm:text-3xl lg:h-[3rem] lg:text-4xl text-center font-serif font-bold text-gray-900 dark:text-white">
                Login
              </h3>
            <form className="flex flex-col mt-[5%] lg:mt-[10%] space-y-5 lg:space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-xs lg:mb-2 sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  onChange={onChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-500 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 sm:placeholder:text-xs  dark:bg-[#25282c] dark:border-0 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-xs lg:mb-2 sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  onChange={onChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••••"
                  className="bg-gray-50 border border-gray-500 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 sm:placeholder:text-xs  dark:bg-[#25282c] dark:border-0 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="flex relative items-start">
                <div className="flex sm:h-auto h-6 items-start">
                  <div className="flex  items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-2 h-2 mb-1 lg:mb-0 lg:w-4 lg:h-4 bg-gray-50  rounded border border-gray-500 focus:ring-3 focus:ring-blue-300 dark:bg-[#25282c] dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-0.5 lg:ml-3 flex text-xs lg:text-sm">
                    <label
                      htmlFor="remember"
                      className="font-medium  text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className=" flex text-xs lg:text-sm sm:h-auto absolute right-0 text-blue-700  dark:text-blue-500">
                    <Link to={"/"}>forgot password?</Link>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className=" hidden mx-auto sm:block w-[12rem] h-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <button
                type="submit"
                className=" mx-auto my-2 sm:hidden w-[6rem] h-[2rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login 
              </button>
              <div className="flex pt-4 relative text-xs lg:text-sm font-medium text-gray-500 dark:text-gray-300">
                <label htmlFor="AlreadyLogin"></label> Not registered ?&nbsp;
                <Link
                  to={"/signUp"}
                  id="AlredayLogin"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
