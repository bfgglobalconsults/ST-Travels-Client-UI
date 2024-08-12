"use client";

import { PopularCities } from "@/constant/constant";
import useOutsideDropdown from "@/utils/useOutsideDropdown";
import Image from "next/image";
import { FC, useState } from "react";

interface City {
  id: number;
  place: string;
  airport: string;
  button: string;
}

interface SelectCityProps {
  value: string;
  cityData: City[];
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const SelectCity: FC<SelectCityProps> = ({ value, cityData, selectedCity, setSelectedCity }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);
  const [inputValue, setInputValue] = useState("");

  const filteredCities = cityData.filter((city) =>
    city.place.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control open-select"
        placeholder={value}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      />
      {value === "From" ? (
        <Image
          src="/assets/images/icon/from.png"
          className="img-fluid"
          alt=""
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/assets/images/icon/location.png"
          className="img-fluid"
          alt=""
          width={20}
          height={20}
        />
      )}
      <div
        ref={ref}
        className={`selector-box ${isComponentVisible ? "show" : ""}`}
      >
        <h6 className="title">{PopularCities}</h6>
        <ul>
          {filteredCities.map((data, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => {
                  setSelectedCity(data.place);
                  setInputValue(data.place);
                  setIsComponentVisible(false);
                }}
              >
                <h5>{data.place}</h5>
                <h6>{data.airport}</h6>
                <span>{data.button}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCity;
