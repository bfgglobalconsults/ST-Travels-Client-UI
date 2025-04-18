import {
  dubaiInclusionData,
  exclusionData,
  inclusionData,
  turkeyInclusionData,
} from "@/data/tour/single-page";
import { FC } from "react";

const TurkeyAboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">
          Turkey is a country where tradition and innovation coexist in harmony,
          creating a rich cultural fabric that captivates visitors. Situated at
          the crossroads of Europe and Asia, Turkey boasts a unique blend of
          influences that shape its identity, from ancient civilizations to
          modern metropolises.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {turkeyInclusionData.map((data, index) => (
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

export default TurkeyAboutSec;
