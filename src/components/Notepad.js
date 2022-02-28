import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteState";

export default function Notepad() {
  const context = useContext(NoteContext);
  const { isNotePadOpen, setisNotePadOpen, added } = context;
  const [addNote, setaddNote] = useState({ title: " ", description: " " });

  // Handle's closing of nodepad on click  
  const handleCross = (e) => {
    e.preventDefault();
    setisNotePadOpen(false);
  };

  // Handle's submission of note on click  
  const handleClick = (e) => {
    e.preventDefault();
    added(addNote);
    setisNotePadOpen(false);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setaddNote({ ...addNote, [event.target.name]: value });
  };

  return (
    <>
    {/* This div is used for gray opaque background appearing when modal enters in */}
      <div
        className={` ${
          isNotePadOpen ? "flex" : "hidden"
        } w-full h-full bg-black dark:bg-slate-600 opacity-40 fixed top-0 z-20`}
      ></div>
       {/* ***********Note pad modal*********** */}
       {/* this div contains form which translate with this div when isNotePadOpen === true */}
      <div
      // To close modal when click's on div outside form 
        onMouseDown={handleCross}
        className={`flex ${
          isNotePadOpen ? "translate-y-0 " : "-translate-y-full "
        } ease-in-out duration-500 w-full  min-h-screen h-full justify-center transform  transition-all bg-red-500/5 items-center  z-20 fixed top-0 `}
      >
        <div
          onMouseDown={(e) => {
            // To prevent closing when clicking on form
            e.stopPropagation();
          }}
          className=" relative flex flex-col  mx-auto  w-2/3 z-30 border-4 rounded-2xl bg-neutral-100 border-slate-400 dark:border-slate-700 dark:bg-[#121416]"
        >
          {/* Cross Button to close modal */}
          <button
            onClick={handleCross}
            type="button"
            className="p-1 w-6 sm:w-8 rounded-full  hover:bg-opacity-30 text-gray-800 dark:text-gray-400 hover:bg-zinc-300 dark:hover:bg-slate-100  focus:outline-none  absolute top-3 right-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <form>
            <div className="flex flex-col w-11/12 h-full mt-3 sm:mt-6 sm:mb-4 mx-auto justify-center">
              {/* Main heading */}
              <h1 className="font-semibold text-center font-serif text-lg whitespace-pre my-1 sm:text-3xl sm:my-2 lg:text-4xl lg:my-3 text-black dark:text-white">
                Add Note
              </h1>
              {/* Title heading and textarea */}
              <label
                htmlFor="title"
                className="font-semibold font-serif text-base my-1  sm:text-xl sm:my-2 lg:text-2xl lg:my-3 text-black dark:text-white  "
              >
                Title
              </label>
              <textarea
                onChange={onChange}
                name="title"
                className="w-full h-10 px-2 pt-1 pb-2 sm:min-h-[5vh] sm:px-4 sm:pt-2 lg:px-8 lg:pt-4 lg:min-h-[12vh] whitespace-pre-line  resize-none rounded-md sm:rounded-xl font-medium  tracking-wide font-serif text-xs sm:text-base lg:text-xl border-2 shadow-lg shadow-gray-300 border-gray-300 text-black caret-slate-900 bg-slate-100 dark:shadow dark:border-0 dark:text-white dark:caret-slate-50 dark:bg-[#25282c]  focus:outline-none "
              ></textarea>
              {/* Description heading and textarea */}
              <label
                htmlFor="description"
                className="font-semibold font-serif text-base sm:text-xl lg:text-2xl my-1 sm:my-2 lg:my-3 text-black dark:text-white "
              >
                Your content here....{" "}
              </label>
              <textarea
                onChange={onChange}
                name="description"
                className="w-full h-20  px-2 pt-1 pb-2 sm:px-4 sm:pt-2 sm:min-h-[15vh] lg:px-8 lg:pt-4 lg:min-h-[35vh] resize-none rounded-md sm:rounded-xl whitespace-pre-line  tracking-wide font-mono text-xs sm:text-base lg:text-xl border-2 shadow-lg shadow-gray-300 border-gray-300 text-zinc-800 caret-slate-900 bg-slate-100 dark:shadow dark:border-0 dark:text-slate-50 dark:caret-slate-300 dark:bg-[#25282c]   focus:outline-none "
              ></textarea>
              {/* Add Note button */}
              <div className="flex justify-center items-center h-14 my-2 sm:py-0 sm:h-20">
                <button
                  onClick={handleClick}
                  className=" py-1 px-2 sm:py-2 sm:px-4 lg:py-3  lg:px-7 text-base sm:text-lg lg:text-xl tracking-wide font-bold rounded-lg shadow-lg dark:shadow shadow-blue-300  text-white bg-blue-500  border border-gray-200 hover:bg-blue-600  focus:z-10 focus:ring-2 focus:ring-blue-700 "
                >
                  Add Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* -----------Note pad modal----------- */}
    </>
  );
}
