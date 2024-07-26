import { MultiCityRoute, NonStopFlights } from "@/constant/constant";
import { FC } from "react";

const SelectRoute: FC = () => {
  return (
    <form
      style={{ backgroundColor: "white", padding: "10px" }}
      className="radio-form"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
    >
      <input
        style={{ color: "black" }}
        id="radio-1"
        type="radio"
        name="gender"
        value="in city"
        defaultChecked
      />
      <label
        style={{ color: "black" }}
        htmlFor="radio-1"
        className="radio-label"
      >
        {MultiCityRoute}
      </label>
      <input
        style={{ color: "black" }}
        id="radio-2"
        type="radio"
        name="gender"
        value="out of city"
      />
      <label
        style={{ color: "black" }}
        htmlFor="radio-2"
        className="radio-label"
      >
        {NonStopFlights}
      </label>
    </form>
  );
};

export default SelectRoute;
