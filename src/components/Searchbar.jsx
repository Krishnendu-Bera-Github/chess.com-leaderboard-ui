import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../features/playerSlice";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(search));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setSearch("");
    dispatch(setSearchInput(""));
  };

  return (
    <form className="mx-4 w-96">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-customWhite sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={search}
          onChange={handleChange}
          id="default-search"
          className="block w-full p-4 h-14 ps-10 text-sm text-customWhite rounded-lg bg-fillColor dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
          placeholder="Search by Name "
        />
        <button
          onClick={handleDelete}
          className="absolute top-2.5 bottom-2.5 right-28 text-red-500"
        >
          {search.length > 0 ? "X" : ""}
        </button>
        <button
          onClick={handleClick}
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
