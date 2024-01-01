import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // state.messages.splice(5, 1);
      state = state.messages.unshift(action.payload);
    },
    removeMessage: (state) => {
      state = state.messages.length > 5 && state.messages.pop();
    },
  },
});

export default chatSlice.reducer;
export const { addMessage, removeMessage } = chatSlice.actions;
