import AboutSec from "@/components/tour/single-page/common/sections/high-light.tsx/about-sec";
import Img from "@/utils/BackgroundImageRatio";
// import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";
import BaliAboutSec from "./bali-about-sec";
// import DubaiAboutSec from "./dubai-about-sec";

const BaliHighlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <BaliAboutSec />
      <div className="detail-img">
        <Img
          src="/assets/images/tour/bali-island.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="about-sec ">
        <h6>A Road Trip Along Bali's Mediterranean Coast</h6>
        <p>
          Embark on a captivating road trip along Bali's Mediterranean-like
          coast, where azure waters meet sandy shores, offering breathtaking
          views at every turn. As you drive along this scenic route, you'll
          encounter charming coastal villages, hidden beaches, and the vibrant
          local life that makes this journey truly unique.
        </p>
        <h6>The History of Bali's Great Civilisations</h6>
        <p>
          Bali's history is deeply rooted in its ancient civilizations, with
          influences from Indian, Chinese, and European cultures shaping its
          rich heritage. Explore the remnants of these great civilizations
          through Bali's temples, palaces, and historical sites that stand as
          testaments to the island's storied past.
        </p>
        <h6>Foodies, Prepare to Be Enthused</h6>
        <p className="bottom-space">
          For foodies, Bali is a culinary paradise waiting to be explored. From
          sizzling street food stalls to elegant beachfront dining, the island
          offers an array of flavors that will excite your taste buds. Indulge
          in traditional Balinese dishes, fresh seafood, and innovative fusion
          cuisine that reflect the island's diverse cultural influences. Whether
          you're a seasoned foodie or just looking to try something new, Bali's
          food scene will leave you enthused and craving more.
        </p>
      </div>
    </div>
  );
};

export default BaliHighlight;
