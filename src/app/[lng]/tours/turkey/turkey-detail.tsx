import Img from "@/utils/BackgroundImageRatio";
import { dubaiPlaceDetailData, placeDetailData, turkeyPlaceDetailData } from "@/data/tour/single-page";
import { FC } from "react";

const TurkeyPlaceDetail: FC = () => {
  return (
    <div className="col-12">
      <div className="full-width-detail">
        <ul className="place-detail">
          <li>Topkapi Palace Museum</li>
          <li>Galata Tower</li>
          <li>Cappadocia</li>
          <li>Pamukkale</li>
          <li>Duden Waterfalls</li>
        </ul>
        <div className="about-section three-image about_page">
          <div className="row">
            <div className="col-xl-7">
              <div className="image-section">
                {turkeyPlaceDetailData.map((data, index) => (
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
                        Turkey, straddling both Europe and Asia, is a unique
                        country where East meets West. Its rich history, diverse
                        landscapes, and vibrant culture make it a fascinating
                        destination. From the bustling streets of Istanbul, with
                        its iconic landmarks like the Hagia Sophia and the Blue
                        Mosque, to the ancient ruins of Ephesus and the surreal
                        landscapes of Cappadocia, Turkey offers a blend of
                        modernity and tradition.
                      </p>
                      <p>
                        Turkish cuisine is equally diverse and flavorful, with
                        dishes like kebabs, mezes, and baklava delighting taste
                        buds worldwide. The country’s tea and coffee culture
                        also plays a significant role in daily life, offering a
                        warm welcome to locals and visitors alike.
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

export default TurkeyPlaceDetail;
