// flight-data.js
import { createSlice } from "@reduxjs/toolkit";

interface HotelDataState {
  rate: string;
  price: number;
  startDate: Date ;
  returnDate: Date ;
  guests: number;
}

const initialState: HotelDataState = {
  rate: "basic-rate",
  price: 80,
  startDate: new Date(),
  returnDate: new Date(),
  guests: 1,
};

const hotelDataSlice = createSlice({
  name: "hotelData",
  initialState,
  reducers: {
    setHotelData: (state, action) => {
      const {
        rate,
  price,
  startDate,
  returnDate,
  guests,
      } = action.payload;
      state.rate = rate;
      state.price = price;
      state.startDate = startDate;
      state.returnDate = returnDate;
      state.guests = guests;
      
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setRate: (state, action) => {
      state.rate = action.payload;
    },
    setPrice: (state, action) => {
      // Added action
      state.price = action.payload;
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
  setHotelData,
  setRate,
  setGuests,
  setPrice,
  setStartDate,
  setReturnDate,
} = hotelDataSlice.actions;
export default hotelDataSlice.reducer;
