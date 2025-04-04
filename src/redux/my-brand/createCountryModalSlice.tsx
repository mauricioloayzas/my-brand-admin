import { createSlice } from "@reduxjs/toolkit";

interface CreateCountryModalState {
  isModalOpen: boolean;
}

const initialState: CreateCountryModalState = {
  isModalOpen: false,
};

const createCountryModalSlice = createSlice({
  name: "createCountryModal",
  initialState,
  reducers: {
    toggleCreateCountryModalOpen: (state) => {
      state.isModalOpen = true;
    },
    toggleCreateCountryModalClose: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { toggleCreateCountryModalOpen, toggleCreateCountryModalClose } =
  createCountryModalSlice.actions;
export default createCountryModalSlice.reducer;
