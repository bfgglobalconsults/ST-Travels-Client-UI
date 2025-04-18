import AboutSec from "@/components/tour/single-page/common/sections/high-light.tsx/about-sec";
import Img from "@/utils/BackgroundImageRatio";
// import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";
import VietnamAboutSec from "./vietnam-about-sec";
// import DubaiAboutSec from "./dubai-about-sec";

const VietnamHighlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <VietnamAboutSec />
      <div className="detail-img">
        <Img
          src="/assets/images/tour/viet-waterfall-small.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="about-sec ">
        <h6>A Road Trip Along Vietnam's Mediterranean Coast</h6>
        <p>
          Set out on a mesmerizing road trip along Vietnam’s coastal highways,
          where the azure waters of the South China Sea meet rugged cliffs and
          golden beaches. From the vibrant city of Da Nang to the ancient town
          of Hoi An and down to the untouched beauty of Phu Quoc, the coastal
          journey is filled with scenic views, quaint fishing villages, and
          opportunities to explore Vietnam's rich coastal culture.
        </p>
        <h6>The History of Vietnam's Great Civilisations</h6>
        <p>
          Vietnam's history is a fascinating tapestry of ancient civilizations,
          from the sophisticated Đông Sơn culture to the powerful dynasties that
          shaped the nation. Explore the historic cities of Hue and Hanoi, where
          imperial palaces, temples, and pagodas stand as monuments to Vietnam’s
          grand past. The country’s historical sites offer a glimpse into the
          complex and vibrant civilizations that have thrived in this region for
          centuries.
        </p>
        <h6>Foodies, Prepare to Be Enthused</h6>
        <p className="bottom-space">
          For foodies, Vietnam is a paradise of bold flavors and culinary
          delights. Dive into the bustling street food scene, where every corner
          offers something delicious, from savory pho and crispy banh xeo to
          fresh spring rolls. The country’s cuisine is a delightful blend of
          textures, aromas, and spices that reflect its rich cultural heritage.
          Whether dining in a local eatery or a fine restaurant, Vietnam’s food
          scene will captivate and enthuse every culinary explorer.
        </p>
      </div>
    </div>
  );
};

export default VietnamHighlight;
