import Img from "@/utils/BackgroundImageRatio";
import {
  baliPlaceDetailData,
  dubaiPlaceDetailData,
  placeDetailData,
  vietnamPlaceDetailData,
} from "@/data/tour/single-page";
import { FC } from "react";

const VietnamPlaceDetail: FC = () => {
  return (
    <div className="col-12">
      <div className="full-width-detail">
        <ul className="place-detail">
          <li>Cu chi Tunnel</li>
          <li>Ha Long Bay</li>
          <li>Temple of Literature</li>
          <li>Hanoi</li>
          <li>Mekong River Delta</li>
          <li>The Marble Mountains</li>
        </ul>
        <div className="about-section three-image about_page">
          <div className="row">
            <div className="col-xl-7">
              <div className="image-section">
                {vietnamPlaceDetailData.map((data, index) => (
                  <div className="img-box" key={index}>
                    <Img
                      src={data.img}
                      data-tilt
                      data-tilt-perspective="110"
                      data-tilt-speed="400"
                      data-tilt-max="1.2"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="title-box">
                      <h3>{data.placeName}</h3>
                      <h6>{data.empire}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-text about-text-gray">
                <div>
                  <div className="right-detail">
                    <h4>at a glance</h4>
                    <div className="bottom-detail">
                      <p>
                        Vietnam, a Southeast Asian gem, is a country of
                        incredible diversity, blending rich history, stunning
                        landscapes, and vibrant culture. From the bustling
                        streets of Hanoi, where ancient traditions meet modern
                        energy, to the serene waters of Ha Long Bay, dotted with
                        limestone islands, Vietnam offers a variety of
                        experiences for travelers.
                      </p>
                      <p>
                        The country’s history is deeply intertwined with
                        resilience and growth, from the ancient dynasties to its
                        colonial past and modern-day development. Visitors can
                        explore this history through well-preserved temples,
                        historic landmarks, and museums that tell the story of
                        Vietnam's journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VietnamPlaceDetail;
