import {
  dubaiInclusionData,
  exclusionData,
  inclusionData,
  vietnamInclusionData,
} from "@/data/tour/single-page";
import { FC } from "react";

const VietnamAboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">
          Nestled in Southeast Asia, Vietnam is a country rich in cultural
          heritage and natural beauty. Its landscape is a tapestry of lush green
          rice paddies, dense forests, and dramatic coastlines. From the
          bustling streets of Ho Chi Minh City and Hanoi to the serene beauty of
          Ha Long Bay, Vietnam offers a diverse array of experiences.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {vietnamInclusionData.map((data, index) => (
                <li key={index}>{data.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6 margin-up">
          <div className="about-sec">
            <h4>exclusion</h4>
            <ul>
              {exclusionData.map((data, index) => (
                <li key={index}>{data.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VietnamAboutSec;
