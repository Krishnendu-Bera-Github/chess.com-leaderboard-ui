import axios from "axios";

export const getData = async () => {
  const response = await axios.get("https://api.chess.com/pub/leaderboards");
  console.log(response.data);
  return response.data;
};
