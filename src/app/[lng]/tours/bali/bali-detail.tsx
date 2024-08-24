import Img from "@/utils/BackgroundImageRatio";
import { baliPlaceDetailData, dubaiPlaceDetailData, placeDetailData } from "@/data/tour/single-page";
import { FC } from "react";

const BaliPlaceDetail: FC = () => {
  return (
    <div className="col-12">
      <div className="full-width-detail">
        <ul className="place-detail">
          <li>Jimbaran Bay</li>
          <li>Lovina Beach</li>
          <li>Singsing waterfall</li>
          <li>Canggu</li>
          <li>Denpasar</li>
          <li>Penida Island</li>
        </ul>
        <div className="about-section three-image about_page">
          <div className="row">
            <div className="col-xl-7">
              <div className="image-section">
                {baliPlaceDetailData.map((data, index) => (
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
                        Bali, often referred to as the "Island of the Gods," is
                        one of Indonesia's most popular and enchanting
                        destinations. Known for its stunning natural beauty,
                        Bali offers a diverse landscape that ranges from
                        pristine beaches and lush rice terraces to rugged
                        volcanoes and dense jungles. The island's cultural
                        richness is equally captivating, with a vibrant
                        tradition of art, dance, and spirituality that is deeply
                        rooted in Balinese Hinduism.
                      </p>
                      <p>
                        The island is dotted with ancient temples, such as the
                        iconic Tanah Lot and Uluwatu, perched dramatically on
                        cliffs overlooking the ocean. Bali's cultural heart,
                        Ubud, is a hub for art galleries, traditional dance
                        performances, and wellness retreats. Here, you can
                        explore local markets, enjoy traditional Balinese
                        cuisine, and immerse yourself in the island's serene
                        atmosphere.
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

export default BaliPlaceDetail;
