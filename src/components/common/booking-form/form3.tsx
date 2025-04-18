"use client";
import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { cityData } from "@/data/home/flight/flight-data";
import DatePickerComponent from "../date-picker";
import SelectCity from "@/components/common/booking-form/flight-form/select-city";
import SelectTraveler from "./flight-form/select-taraveler";
import SelectRoute from "./flight-form/select-route";
import { setFlightData } from "@/redux-toolkit/reducers/flight-data";

interface FlightThreeProps {
  onSearch: () => void;
}

const FlightThree: FC<FlightThreeProps> = ({ onSearch }) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelers, setTravelers] = useState(1);

  const handleSearch = () => {
    const flightData = {
      fromCity,
      toCity,
      startDate: startDate.toISOString(),
      returnDate: isRoundTrip ? startDate1.toISOString() : null,
      travelers,
    };
    dispatch(setFlightData(flightData));
    onSearch();
    console.log("flight is submitted", flightData);
  };

  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <SelectCity
          value="From"
          cityData={cityData}
          selectedCity={fromCity}
          setSelectedCity={setFromCity}
        />
        <SelectCity
          value="To"
          cityData={cityData}
          selectedCity={toCity}
          setSelectedCity={setToCity}
        />
        <div className="form-group row mb-0 flight-form-input">
          <div className="col">
            <div className="form-control">
              <DatePickerComponent setStart={setStartDate} start={startDate} />
            </div>
          </div>
          {isRoundTrip && (
            <div className="col">
              <div className="form-control">
                <DatePickerComponent
                  setStart={setStartDate1}
                  start={startDate1}
                />
              </div>
            </div>
          )}
          <div className="col">
            <SelectTraveler setTravelers={setTravelers} travelers={travelers} />
          </div>
        </div>
      </form>
      <SelectRoute setIsRoundTrip={setIsRoundTrip} />
      <button
        onClick={handleSearch}
        className="btn btn-rounded border-white color1"
        type="submit"
      >
        Book Now
      </button>
    </>
  );
};

export default FlightThree;
