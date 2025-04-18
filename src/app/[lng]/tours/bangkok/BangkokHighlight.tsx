import AboutSec from "@/components/tour/single-page/common/sections/high-light.tsx/about-sec";
import Img from "@/utils/BackgroundImageRatio";
// import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";
import BangkokAboutSec from "./bangkok-about-sec";
// import DubaiAboutSec from "./dubai-about-sec";

const BangkokHighlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <BangkokAboutSec />
      <div className="detail-img">
        <Img
          src="/assets/images/tour/bali-island.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="about-sec ">
        <h6>A Road Trip Along Bangkok's Mediterranean Coast</h6>
        <p>
          While Bangkok is known for its bustling streets, vibrant culture, and
          rich history, exploring the city by road offers a unique perspective
          that allows you to dive deeper into its diverse neighborhoods, hidden
          gems, and surrounding attractions. Whether you're navigating the
          lively streets of the city center or venturing into the less-traveled
          outskirts, a road trip through Bangkok promises an unforgettable
          adventure.
        </p>
        <h6>The History of Bangkok's Great Civilisations</h6>
        <p>
          Bangkok, Thailand's vibrant capital, is a city deeply rooted in
          history, with its story stretching back through centuries of cultural
          evolution, dynastic rule, and monumental change. From its humble
          beginnings as a small trading post to its rise as the seat of Siamese
          power and its present status as a global metropolis, Bangkok's history
          is a testament to the resilience and grandeur of the civilizations
          that have shaped it.
        </p>
        <h6>Foodies, Prepare to Be Enthused</h6>
        <p className="bottom-space">
          Bangkok is a paradise for food lovers, a city where every street
          corner offers a new flavor, every market brims with fresh ingredients,
          and every meal is a culinary adventure. From sizzling street food
          stalls to world-class fine dining, Bangkok is a city that celebrates
          food in all its forms. Whether you're a fan of bold and spicy Thai
          dishes or eager to explore global cuisine, Bangkok promises to excite
          your taste buds and leave you craving more.
        </p>
      </div>
    </div>
  );
};

export default BangkokHighlight;
