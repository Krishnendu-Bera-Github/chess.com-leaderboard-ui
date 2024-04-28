import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../features/playerSlice";

const DropDownSelect = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectName, setSelectName] = useState("Daily");
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategories = useSelector((state) => state.players.key);

  // console.log(selectCategories);

  const handleSelect = (key) => {
    setSelectName(matchItems(key));
    // console.log(key);
    dispatch(selectCategory(key));
    setIsOpen(!isOpen);
  };

  const matchItems = (item) => {
    switch (item) {
      case "daily":
        return "Daily";

      case "daily960":
        return "Daily 960";

      case "live_rapid":
        return "Rapid";

      case "live_blitz":
        return "Blitz";

      case "live_bullet":
        return "Bullet";

      case "live_bughouse":
        return "Bughouse";

      case "live_blitz960":
        return "Blitz 960";

      case "live_threecheck":
        return "3 check";

      case "live_crazyhouse":
        return "Crazyhouse";

      case "live_kingofthehill":
        return "King of the Hill";

      case "tactics":
        return "Tactics";

      case "rush":
        return "Rush";

      case "battle":
        return "Battle";

      default:
        return "";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left mx-4">
      <div className=" text-customWhite hover:text-white">
        <button
          type="button"
          className="inline-flex w-96 h-14 justify-between items-center gap-x-1.5 rounded-md bg-fillColor px-3 py-2 text-xl font-semibold shadow-sm"
          id="menu-button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
          onClick={toggleDropDown}
        >
          <div className="flex gap-x-4">
            <img className="w-8" src={`/images/board.svg`} alt="" />
            <p>{selectName}</p>
          </div>
          <svg
            className="-mr-1 h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-full h-60 overflow-y-auto origin-top-right rounded-md bg-fillColor text-customWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {Object.keys(data).map((item, index) => (
              <a
                onClick={() => handleSelect(item)}
                key={index}
                href="#"
                className="block px-4 py-2 text-sm border-b-[0.5px] border-gray-600 hover:bg-[#373532]"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                {matchItems(item)}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownSelect;
