import React, { useEffect } from "react";
import Heading from "./Heading";
import DropDownSelect from "./DropDownSelect";
import { getData } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import LeaderBoardTable from "./LeaderBoardTable";
import { useDispatch } from "react-redux";
import { allPlayers } from "../features/playerSlice";
import Searchbar from "./Searchbar";
import { Pagination } from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();

  const { data, error } = useQuery({
    queryKey: ["players"],
    queryFn: getData,
  });

  useEffect(() => {
    if (data) {
      dispatch(allPlayers(data));
    }
  }, [data, dispatch]);

  return (
    <div className="w-3/4 mx-auto p-4 ">
      <Heading />
      <div className="flex justify-between items-center">
        <DropDownSelect data={data} />
        <Searchbar />
      </div>
      <LeaderBoardTable />
      <Pagination />
    </div>
  );
};

export default Home;
