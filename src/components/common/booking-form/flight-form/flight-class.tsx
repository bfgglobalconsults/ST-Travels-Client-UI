import { FC } from "react";
import { Business, Economy, Premium } from "@/constant/constant";


const FlightClass: FC<{
  flightClass: string;
  setFlightClass: (className: string) => void;
}> = ({ flightClass, setFlightClass }) => {
  return (
    <div>
      <label>Flight Class</label>
                <div className="selector">

      <select
        value={flightClass}
        onChange={(e) => setFlightClass(e.target.value)}
      >
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
        <option value="First Class">First Class</option>
      </select>
      </div>
    </div>
  );
};

export default FlightClass;
