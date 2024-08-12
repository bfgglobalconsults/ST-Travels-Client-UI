// flight-data.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fromCity: "",
  toCity: "",
  startDate: null,
  returnDate: null,
  travelers: 1,
  flightClass: "Economy", // Adding a default flight class
};

const flightDataSlice = createSlice({
  name: "flightData",
  initialState,
  reducers: {
    setFlightData: (state, action) => {
      const {
        fromCity,
        toCity,
        startDate,
        returnDate,
        travelers,
        flightClass,
      } = action.payload;
      state.fromCity = fromCity;
      state.toCity = toCity;
      state.startDate = startDate;
      state.returnDate = returnDate;
      state.travelers = travelers;
      state.flightClass = flightClass;
    },
    setTravelers: (state, action) => {
      state.travelers = action.payload;
    },
    setFlightClass: (state, action) => {
      state.flightClass = action.payload;
    },
  },
});

export const { setFlightData, setTravelers, setFlightClass } =
  flightDataSlice.actions;
export default flightDataSlice.reducer;
