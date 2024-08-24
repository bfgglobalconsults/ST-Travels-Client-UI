import Img from "@/utils/BackgroundImageRatio";
import { dubaiPlaceDetailData, placeDetailData } from "@/data/tour/single-page";
import { FC } from "react";

const DubaiPlaceDetail: FC = () => {
  return (
    <div className="col-12">
      <div className="full-width-detail">
        <ul className="place-detail">
          <li>Burj Khalifa</li>
          <li>Safari Desert</li>
          <li>The Dubai Fountain</li>
          <li>Dubai Aquarium</li>
          <li>Burj Al Arab</li>
          <li>Dubai Mall</li>
        </ul>
        <div className="about-section three-image about_page">
          <div className="row">
            <div className="col-xl-7">
              <div className="image-section">
                {dubaiPlaceDetailData.map((data, index) => (
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
                        Dubai is a city in the United Arab Emirates (UAE) known
                        for its ultramodern architecture, luxury shopping, and
                        vibrant nightlife. It is home to iconic landmarks like
                        the Burj Khalifa, the world's tallest building, and the
                        Palm Jumeirah, an artificial archipelago shaped like a
                        palm tree.
                      </p>
                      <p>
                        Dubai's economy, once reliant on oil, has diversified
                        into tourism, real estate, and finance, making it a
                        global business hub. The city also hosts a blend of
                        traditional and contemporary cultures, with a rich
                        history rooted in Bedouin heritage.
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

export default DubaiPlaceDetail;
