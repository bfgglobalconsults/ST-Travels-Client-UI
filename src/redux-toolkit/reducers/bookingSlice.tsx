// bookingSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlightDataState {
  travelers: number;
  flightClass: string;  
}
const initialState: FlightDataState = {
  travelers: 1,
  flightClass: "Economy",
};
// const initialState = {
//   travelers: 1,
//   flightClass: "Economy",
// };

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setTravelers: (state, action: PayloadAction<number>) => {
      state.travelers = action.payload;
    },
    setFlightClass: (state, action) => {
      state.flightClass = action.payload;
    },
  },
});

export const { setTravelers, setFlightClass } = bookingSlice.actions;
export default bookingSlice.reducer;
