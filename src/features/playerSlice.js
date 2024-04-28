import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {},
  key: "daily",
  search: "",
  totalPosts: 10,
};

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    allPlayers: (state, action) => {
      state.players = action.payload;
    },

    selectCategory: (state, action) => {
      state.key = action.payload;
    },

    setSearchInput: (state, action) => {
      state.search = action.payload;
    },

    setTotalPosts: (state, action) => {
      state.totalPosts = action.payload;
    },
  },
});

export const { allPlayers, selectCategory, setSearchInput, setTotalPosts } =
  playerSlice.actions;

export default playerSlice.reducer;
