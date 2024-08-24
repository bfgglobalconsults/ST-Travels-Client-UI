import { dubaiInclusionData, exclusionData, inclusionData } from "@/data/tour/single-page";
import { FC } from "react";

const DubaiAboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">
          Dubai, one of the seven emirates of the United Arab Emirates (UAE),
          has rapidly transformed from a small fishing village to a global
          metropolis in just a few decades. Known for its futuristic skyline,
          Dubai is home to architectural marvels like the Burj Khalifa, the
          tallest building in the world, and the Burj Al Arab, often dubbed the
          most luxurious hotel.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {dubaiInclusionData.map((data, index) => (
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

export default DubaiAboutSec;
