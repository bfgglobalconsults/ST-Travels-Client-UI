"use client";
import FlightClass from "@/components/common/booking-form/flight-form/flight-class";
import QtyBox from "@/components/common/booking-form/flight-form/qty-box-flight";
import useOutsideDropdown from "@/utils/useOutsideDropdown";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { FC, useState } from "react";
import { setTravelers, setFlightClass } from "@/redux-toolkit/reducers/bookingSlice";

interface SelectTravelerProps {
  travelers: number;
  setTravelers: (travelers: number) => void;
}

const SelectTraveler: FC<SelectTravelerProps> = ({
  travelers,
  setTravelers,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);
  const [travelerCount, setTravelerCount] = useState(1); // Default to 1 traveler
  const [flightClass, setFlightClassState] = useState("Economy"); // Default flight class
  const dispatch = useDispatch();

const applySelection = () => {

  // dispatch(setTravelers(travelerCount));
  dispatch(setFlightClass(flightClass));
  setIsComponentVisible(false);
};

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control open-select"
        placeholder="traveler"
        value={`${travelerCount} Traveler${
          travelerCount > 1 ? "s" : ""
        }, ${flightClass}`}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        readOnly
      />
      <img src="/assets/images/icon/user.png" className="img-fluid" alt="" />
      <div
        style={{ overflowY: "scroll", maxHeight: "180px" }}
        ref={ref}
        className={`selector-box-flight ${isComponentVisible ? "show" : ""}`}
      >
        <QtyBox
          travelerCount={travelerCount}
          setTravelerCount={setTravelerCount}
        />
        <FlightClass
          flightClass={flightClass}
          setFlightClass={setFlightClassState}
        />
        <hr />
        <button onClick={applySelection}>Apply</button>
        <hr />
      </div>
    </div>
  );
};

export default SelectTraveler;
