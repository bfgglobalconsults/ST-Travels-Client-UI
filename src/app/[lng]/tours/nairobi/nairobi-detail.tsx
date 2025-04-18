import Img from "@/utils/BackgroundImageRatio";
import {
  dubaiPlaceDetailData,
  nairobiPlaceDetailData,
  placeDetailData,
  turkeyPlaceDetailData,
} from "@/data/tour/single-page";
import { FC } from "react";

const NairobiPlaceDetail: FC = () => {
  return (
    <div className="col-12">
      <div className="full-width-detail">
        <ul className="place-detail">
          <li>National Museum of Kenya</li>
          <li>Nairobi National Park</li>
          <li>Giraffe Center</li>
          <li>Karura Forest</li>
        </ul>
        <div className="about-section three-image about_page">
          <div className="row">
            <div className="col-xl-7">
              <div className="image-section">
                {nairobiPlaceDetailData.map((data, index) => (
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
                        Nairobi, the capital of Kenya, is a city that pulses
                        with energy and diversity. As one of Africa's most
                        dynamic metropolises, Nairobi is a thriving hub of
                        commerce, culture, and innovation. Known as the "Green
                        City in the Sun," it boasts a unique blend of urban
                        sophistication and natural beauty.
                      </p>
                      <p>
                        At the heart of Nairobi lies a contrast between the
                        modern skyline and the natural wonders that surround it.
                        The city is home to Nairobi National Park, where you can
                        spot lions, giraffes, and rhinos against the backdrop of
                        towering skyscrapers—a rare sight in any capital. This
                        juxtaposition of wildlife and urban life makes Nairobi a
                        truly unique destination.
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

export default NairobiPlaceDetail;
