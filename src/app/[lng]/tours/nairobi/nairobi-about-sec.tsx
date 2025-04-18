import {
  dubaiInclusionData,
  exclusionData,
  inclusionData,
  nairobiInclusionData,
  turkeyInclusionData,
} from "@/data/tour/single-page";
import { FC } from "react";

const NairobiAboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">
          Nairobi's cultural scene is equally vibrant. From bustling markets and
          art galleries to lively music venues, the city is a melting pot of
          creativity and tradition. Visitors can explore the rich history of
          Kenya at the Nairobi National Museum or experience the flavors of
          local cuisine in the city's diverse restaurants and street food
          stalls.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {nairobiInclusionData.map((data, index) => (
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

export default NairobiAboutSec;
