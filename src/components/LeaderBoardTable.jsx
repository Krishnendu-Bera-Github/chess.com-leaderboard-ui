import React, { useState } from "react";
import { useSelector } from "react-redux";

const LeaderBoardTable = () => {
  const players = useSelector((state) => state.players.players);
  const key = useSelector((state) => state.players.key);
  const search = useSelector((state) => state.players.search);
  const totalPosts = useSelector((state) => state.players.totalPosts);

  const selectedPlayers = totalPosts || [];

  const filteredPlayers = selectedPlayers?.filter(
    (player) =>
      player.name?.toLowerCase().includes(search.toLowerCase()) ||
      player.username?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative overflow-x-auto mx-4 my-4">
      <table className="w-full text-sm text-left rtl:text-right text-customWhite dark:text-gray-400 border-2 border-fillColor">
        <thead className="text-xs text-customWhite uppercase bg-fillColor dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Player
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Won
            </th>
            <th scope="col" className="px-6 py-3">
              Win %
            </th>
            <th scope="col" className="px-6 py-3">
              Draw
            </th>
            <th scope="col" className="px-6 py-3">
              Lost
            </th>
            <th scope="col" className="px-6 py-3">
              Lost %
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr
              key={index}
              className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-fillColor"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-customWhite whitespace-nowrap dark:text-white flex items-center gap-x-1"
              >
                <span
                  className={`mx-1 p-2 rounded-md w-8 ${
                    player.rank === 1
                      ? "bg-orange-500"
                      : player.rank === 2
                      ? "bg-gray-500"
                      : player.rank === 3
                      ? "bg-teal-500"
                      : ""
                  }`}
                >
                  #{player.rank}
                </span>
                <span>
                  <img className="w-10 rounded-md" src={player.avatar} alt="" />
                </span>
                <span className="bg-red-950 p-1 text-xs">
                  {player.title || `NA`}
                </span>
                {player.name || player.username}
              </td>
              <td className="px-6 py-4">{player.score}</td>
              <td className="px-6 py-4 text-green-500">{player.win_count}</td>
              <td className="px-6 py-4">
                {player.win_count === 0 && player.loss_count === 0
                  ? "0.00"
                  : (
                      (player.win_count /
                        (player.win_count + player.loss_count)) *
                      100
                    ).toFixed(2)}
                %
              </td>
              <td className="px-6 py-4">{player.draw_count}</td>
              <td className="px-6 py-4 text-red-500">{player.loss_count}</td>
              <td className="px-6 py-4">
                {player.win_count === 0 && player.loss_count === 0
                  ? "0.00"
                  : (
                      (player.loss_count /
                        (player.win_count + player.loss_count)) *
                      100
                    ).toFixed(2)}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
