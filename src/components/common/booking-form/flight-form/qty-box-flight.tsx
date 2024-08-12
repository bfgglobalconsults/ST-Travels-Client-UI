"use client";
import { FC } from "react";

import { Adult } from "@/constant/constant";

import QuantityInput from "./qty-inputs";

const QtyBox: FC<{
  travelerCount: number;
  setTravelerCount: (count: number) => void;
}> = ({ travelerCount, setTravelerCount }) => {
  return (
    <div>
      <label>Travelers</label>
      <input
        type="number"
        min="1"
        value={travelerCount}
        onChange={(e) => setTravelerCount(Number(e.target.value))}
      />
    </div>
  );
};

export default QtyBox;
