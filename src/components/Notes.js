import React, { useContext, useEffect } from "react";
import { NoteContext } from "../Context/NoteState";
import { Outlet } from "react-router-dom";
import Updatemodal from "./Updatemodal";
import Notepad from "./Notepad";
export const Notes = () => {
  const context = useContext(NoteContext);
  const {
    fetchNotes,
    deleted,
    getNoteForUpdate,
    setisNotePadOpen,
    note,
  } = context;

  useEffect(() => {
    fetchNotes();
    console.log("hi");
  }, []);

  return (
    //    😀 ***********Elememt name*********** => start of element
    //    😀 -----------Elememt name----------- => end of element
    <>
      {/* Updatemodal and notepad are present in notes at top it translates down on click of button */}
      <Updatemodal />
      <Notepad />
      <div className="absolute top-[8%] right-0 left-0 bg-white dark:bg-black 2xl:container 2xl:mx-auto w-auto  min-h-[91vh] max-h-full ">
        {/* **********Heading************ */}
        <div className=" flex flex-col  mx-auto w-auto  font-serif h-auto">
          <div className="flex flex-col w-auto h-fit mt-4 mx-8 lg:mx-16">
            <h1 className=" text-2xl  ml-5 my-1 lg:text-4xl text-black dark:text-slate-100">
              Notes
            </h1>
            <hr className=" my-1 lg:my-2 border-slate-300 dark:border-slate-800 " />
          </div>
        </div>
        {/* -----------Heading----------- */}

        {/* **********The Notes Section************ */}
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-row-4 place-items-center mx-auto  mt-2 w-11/12 h-3/5 font-extrabold font-serif ">
          {/* populating the Notes */}
          {note.map((note) => {
            return (
              <div
                className=" group relative flex cursor-pointer flex-col mx-4 my-5 rounded-2xl border-[0.5px] border-gray-300 shadow-lg  shadow-gray-300 bg-slate-50 dark:border-0 dark:shadow dark:bg-[#121416]  h-44 sm:h-56 p-4 w-[90%] hover:bg-gray-100 dark:hover:bg-zinc-800"
                key={note._id}
              >
                {/* 📌 Title of notes */}
                <h1 className=" text-sm overflow-hidden h-[30%] tracking-wider break-words font-semibold font-serif text-black dark:text-white mb-1.5 sm:text-xl sm:mb-2.5">
                  {note.title.length <= 40
                    ? note.title
                    : note.title.substring(0, 40) + "...."}
                </h1>
                {/* 📌 Description of notes */}
                <p className=" text-xs h-[55%] font-serif sm:h-[50%] sm:text-base overflow-hidden break-words font-medium tracking-wider text-gray-800 dark:text-[#feffffa1]">
                  {note.description.length <= 130
                    ? note.description
                    : note.description.substring(0, 110) + "..."}
                </p>
                <button
                    type="button"
                    className="p-1 sm:w-8 rounded-full hidden text-gray-400 group-hover:flex bg-gray-100 hover:text-gray-500 dark:bg-zinc-800 dark:hover:text-slate-200 focus:outline-none  absolute top-2 right-2 sm:top-4 sm:right-4"
                    onClick={() => {
                      deleted(note._id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-7 sm:w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
              </div>
            );
          })}
          {/* -----------The Notes Section----------- */}

          {/* ***********➕ Add note button***********  */}
          <div
            className=" fixed flex text-white  bottom-[1.5rem] right-[3rem] sm:bottom-[3rem] sm:right-[6rem]  justify-end
            "
          >
            <button
              // to="new"
              onClick={() => {
                setisNotePadOpen(true);
              }}
              className="flex group items-center bg-blue-600 p-1 sm:p-3 h-fit w-fit rounded-full m-none   hover:bg-blue-700 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-7 w-7 sm:h-9 sm:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h1 className=" hidden  group-hover:block ml-1 md:ml-2 text-lg md:text-2xl tracking-tighter font-mono font-bold">
                Add Notes
              </h1>
            </button>
          </div>
          {/* ***********➕ Add note button***********  */}
        </div>
      </div>
      <Outlet />
    </>
  );
};
