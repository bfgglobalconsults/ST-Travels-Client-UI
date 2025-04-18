import {
  baliInclusionData,
  dubaiInclusionData,
  exclusionData,
  inclusionData,
} from "@/data/tour/single-page";
import { FC } from "react";

const BaliAboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">
          Bali's culinary scene is another highlight, with a variety of local
          dishes, fresh seafood, and international cuisine to satisfy every
          palate. Whether you're surfing in Kuta, exploring the temples in
          Uluwatu, or simply unwinding in a serene beachside resort, Bali offers
          an unforgettable experience that combines natural beauty, cultural
          richness, and modern comforts.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {baliInclusionData.map((data, index) => (
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

export default BaliAboutSec;
