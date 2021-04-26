import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    score: 0,
  },
  reducers: {
    incrementScoreBy: {
      reducer(state, { payload }: PayloadAction<number>) {
        state.score += payload;
      },
      prepare(payload: number = 2) {
        return { payload };
      },
    },
  },
});

export const {
  incrementScoreBy: incrementScoreByActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
