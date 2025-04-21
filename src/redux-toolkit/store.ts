import { configureStore } from "@reduxjs/toolkit";
import { gridReducer } from "./reducers/grid-reducer";
import { hotelFilterReducer } from "./reducers/hotel-filter";
import { tourFilterReducer } from "./reducers/tour-filter";
import { flightFilterReducer } from "./reducers/flight-filter";
import { cabFilterReducer } from "./reducers/cab-filter";
import langReducer from "./reducers/language";
import { restaurantFilerReducer } from "./reducers/restaurant.filter";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import currencyReducer from "./reducers/currency";
import hotelReducer from "./hotel-api";
import tourReducer from "./tour-api";
import flightReducer from "./flight-api";
import flightData from "./reducers/flight-data";
import hotelData from "./reducers/hotel-data";
import cabReducer from "./cab-api";
import restaurantReducer from "./restaurant-api";
import bookingSlice from "./reducers/bookingSlice";

export const store = configureStore({
  reducer: {
    gridReducer,
    hotelFilterReducer,
    tourFilterReducer,
    flightFilterReducer,
    cabFilterReducer,
    restaurantFilerReducer,
    currency: currencyReducer,
    language: langReducer,
    hotel: hotelReducer,
    tour: tourReducer,
    flight: flightReducer,
    flightData,
    hotelData,
    cab: cabReducer,
    restaurant: restaurantReducer,
    booking: bookingSlice
  },
  devTools: true,
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
