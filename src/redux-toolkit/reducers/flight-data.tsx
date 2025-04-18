// flight-data.js
import { createSlice } from "@reduxjs/toolkit";

interface FlightDataState {
  fromCity: string;
  toCity: string;
  startDate: Date ;
  returnDate: Date ;
  travelers: number;
  flightClass: string;
}

const initialState: FlightDataState = {
  fromCity: "",
  toCity: "",
  startDate: new Date(),
  returnDate: new Date(),
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
    setFromCity: (state, action) => {
      // Added action
      state.fromCity = action.payload;
    },
    setToCity: (state, action) => {
      // Added action
      state.toCity = action.payload;
    },
    setStartDate: (state, action) => {
      // Added action
      state.startDate = action.payload;
    },
    setReturnDate: (state, action) => {
      // Added action
      state.returnDate = action.payload;
    },
  },
});

export const {
  setFlightData,
  setTravelers,
  setFlightClass,
  setFromCity,
  setToCity,
  setStartDate,
  setReturnDate,
} = flightDataSlice.actions;
export default flightDataSlice.reducer;
