import {
  baliInclusionData,
  bangkokInclusionData,
  dubaiInclusionData,
  exclusionData,
  inclusionData,
} from "@/data/tour/single-page";
import { FC } from "react";

const BangkokAboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">
          When the sun sets, Bangkok transforms into a city of lights and
          energy. The nightlife here is legendary, with rooftop bars offering
          stunning views of the city, bustling night markets, and vibrant clubs
          that keep the party going until dawn. Areas like Sukhumvit, Khao San
          Road, and Thonglor are famous for their nightlife scenes, catering to
          both locals and tourists alike.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {bangkokInclusionData.map((data, index) => (
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

export default BangkokAboutSec;
