import Img from "@/utils/BackgroundImageRatio";
import {
  baliPlaceDetailData,
  bangkokPlaceDetailData,
  dubaiPlaceDetailData,
  placeDetailData,
} from "@/data/tour/single-page";
import { FC } from "react";

const BangkokPlaceDetail: FC = () => {
  return (
    <div className="col-12">
      <div className="full-width-detail">
        <ul className="place-detail">
          <li>The Grand Palace</li>
          <li>Buddhist Temple</li>
          <li>Lumphini Park</li>
          <li>National Museum</li>
          <li>Siam Paragon</li>
          <li>Safari World</li>
        </ul>
        <div className="about-section three-image about_page">
          <div className="row">
            <div className="col-xl-7">
              <div className="image-section">
                {bangkokPlaceDetailData.map((data, index) => (
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
                        Bangkok, the capital of Thailand, is a city that
                        seamlessly blends the old with the new, offering
                        visitors a captivating mix of tradition, culture, and
                        modernity. Known for its bustling streets, vibrant
                        markets, and majestic temples, Bangkok is a city that
                        never sleeps, where there is always something to see and
                        do.
                      </p>
                      <p>
                        Bangkok is a city of contrasts. On one side, you have
                        ancient temples like Wat Arun, Wat Phra Kaew, and the
                        iconic Wat Pho, home to the enormous reclining Buddha.
                        These sacred sites are adorned with intricate details
                        and are rich in history, providing a glimpse into
                        Thailand’s spiritual heritage. On the other side,
                        Bangkok boasts towering skyscrapers, luxury shopping
                        malls, and a modern skyline that symbolizes its rapid
                        urban development.
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

export default BangkokPlaceDetail;
