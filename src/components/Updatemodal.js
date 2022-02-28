import React, { useContext } from "react";
import { updateNotes } from "../Context/Fetch";
import { NoteContext } from "../Context/NoteState";

export default function Updatemodal() {
  const context = useContext(NoteContext);
  const { isUpdateOpen, setisUpdateOpen, update, setupdate, updateUi } =
    context;

  const handleCross = (e) => {
    e.preventDefault();
    setisUpdateOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setisUpdateOpen(false);
    updateNotes(update._id, update.title, update.description, update.tag);
    updateUi(update._id, update.title, update.description, update.tag);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setupdate({ ...update, [event.target.name]: value });
  };

  return (
    <>
      <div
        className={` ${
          isUpdateOpen ? "flex" : "hidden"
        } w-full absolute bg-zinc-800 opacity-40 top-0 h-[100vh] z-10`}
      ></div>
      <div
        onMouseDown={handleCross}
        className={`flex ${
          isUpdateOpen ? "translate-y-0" : "-translate-y-full"
        } ease-in-out duration-500 w-[100%] h-[100vh] justify-center  transform  transition-all  items-center  bg-transparent bg-opacity-70 z-20 absolute top-0`}
      >
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          className="  relative flex flex-col mx-auto  w-2/3 z-30 border-4 rounded-2xl border-slate-700 bg-[#121416]"
        >
          <button
            onClick={handleCross}
            type="button"
            className="p-1 w-8 rounded-full hover:bg-slate-100 hover:bg-opacity-30 text-gray-400 group-hover:bg-zinc-800  focus:outline-none  absolute top-5 right-10 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
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
            <div className="flex flex-col w-11/12 h-full mt-6 mb-4 mx-auto ">
              <h1 className="font-semibold text-center text-white font-serif text-4xl whitespace-pre my-3 ">
                Update Note
              </h1>
              <label
                htmlFor="title"
                className="font-semibold text-white  font-serif text-2xl my-3 "
              >
                Title
              </label>
              <textarea
                value={update.title}
                onChange={onChange}
                name="title"
                rows={5}
                className="w-full whitespace-pre-line resize-none font-medium rounded-xl text-white tracking-wide font-serif  text-xl h-[65px] px-8 pt-4 pb-2 caret-slate-50 bg-[#25282c]  focus:outline-none "
              ></textarea>
              <label
                htmlFor="description"
                className="font-semibold text-white font-serif text-2xl my-3 "
              >
                Update here ...{" "}
              </label>
              <textarea
                value={update.description}
                onChange={onChange}
                name="description"
                className="w-full whitespace-pre-line rounded-xl  text-slate-50 tracking-wide font-mono min-h-[35vh] text-xl px-8 pt-4 pb-8 caret-slate-300 bg-[#25282c] resize-none  focus:outline-none "
              ></textarea>
              <div className="flex justify-center items-center h-28">
                <button
                  onClick={handleSubmit}
                  className="py-3 px-7 tracking-wide font-bold text-xl  text-white bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-600  focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Update Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
