import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPosts } from "../features/playerSlice";

export function Pagination() {
  const players = useSelector((state) => state.players.players);
  const key = useSelector((state) => state.players.key);
  const totalPlayers = players[key]?.length;
  const dispatch = useDispatch();

  const pages = [];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = players[key]?.slice(firstPostIndex, lastPostIndex);

  console.log(currentPosts);

  dispatch(setTotalPosts(currentPosts));

  for (let i = 1; i <= Math.ceil(totalPlayers / postsPerPage); i++) {
    pages.push(i);
  }

  console.log(totalPlayers);
  console.log(pages);

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex items-center text-customWhite justify-center">
      <a
        href="#"
        className={`mx-1 text-sm font-semibold  ${
          currentPage === 1 ? "cursor-not-allowed text-gray-500" : ""
        } `}
        onClick={() => handlePage(currentPage - 1)}
      >
        &larr; Previous
      </a>
      {pages.map((pageNo, index) => (
        <a
          onClick={() => handlePage(pageNo)}
          key={index}
          href="#"
          className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1  hover:scale-105 ${
            pageNo === currentPage ? "bg-gray-400" : ""
          } `}
        >
          {pageNo}
        </a>
      ))}

      <a
        href="#"
        className={`mx-2 text-sm font-semibold ${
          currentPage === pages.length ? "cursor-not-allowed text-gray-500" : ""
        } `}
        onClick={() => handlePage(currentPage + 1)}
      >
        Next &rarr;
      </a>
    </div>
  );
}
