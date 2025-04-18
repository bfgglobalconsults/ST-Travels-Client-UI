import {  OneWayRoute, RoundTrip } from "@/constant/constant";
import { FC } from "react";

interface SelectRouteProps {
  setIsRoundTrip: (isRoundTrip: boolean) => void;
}

const SelectRoute: FC<SelectRouteProps> = ({ setIsRoundTrip }) => {
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
          name="route"
          value="one-way"
          defaultChecked
          onChange={() => setIsRoundTrip(false)}
        />
        <label
          style={{ color: "black" }}
          htmlFor="radio-1"
          className="radio-label"
        >
          {OneWayRoute}
        </label>
        <input
          style={{ color: "black" }}
          id="radio-2"
          type="radio"
          name="route"
          value="round-trip"
          onChange={() => setIsRoundTrip(true)}
        />
        <label
          style={{ color: "black" }}
          htmlFor="radio-2"
          className="radio-label"
        >
          {RoundTrip}
        </label>
      </form>
    );
};

export default SelectRoute;
