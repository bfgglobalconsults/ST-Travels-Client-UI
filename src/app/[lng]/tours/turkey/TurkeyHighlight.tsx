import AboutSec from "@/components/tour/single-page/common/sections/high-light.tsx/about-sec";
import Img from "@/utils/BackgroundImageRatio";
// import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";
import TurkeyAboutSec from "./turkey-about-sec";
// import DubaiAboutSec from "./dubai-about-sec";

const TurkeyHighlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <TurkeyAboutSec />
      <div className="detail-img">
        <Img
          src="/assets/images/tour/turkish-banner.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="about-sec ">
        <h6>A Road Trip Along Turkey's Mediterranean Coast</h6>
        <p>
          Embark on a road trip along Turkey's stunning Mediterranean coast,
          where turquoise waters meet dramatic cliffs and golden beaches. Known
          as the Turquoise Coast, this stretch of coastline is a paradise for
          travelers seeking both adventure and relaxation. From the bustling
          port city of Antalya to the serene bays of Fethiye and Kas, the road
          is dotted with picturesque towns, ancient ruins, and charming seaside
          villages. Along the way, you'll encounter hidden coves, lush forests,
          and the ancient Lycian Way, making this journey a feast for the eyes.
        </p>
        <h6>The History of Turkey's Great Civilisations</h6>
        <p>
          Turkey is a land steeped in history, home to some of the world's
          greatest civilizations. Explore the remnants of the ancient Hittites,
          Greeks, Romans, and Byzantines, all of whom left their mark on this
          fascinating land. Visit the ancient city of Troy, walk the marble
          streets of Ephesus, or stand in awe of the towering rock-cut tombs of
          Lycia. The country's historical richness is woven into its landscapes,
          offering travelers a chance to step back in time and discover the
          stories of empires that once ruled the region.
        </p>
        <h6>Foodies, Prepare to Be Enthused</h6>
        <p className="bottom-space">
          Turkey is a culinary paradise that will leave food enthusiasts in awe.
          The country's diverse geography and rich history have shaped a food
          culture that is as varied as it is delicious. From the succulent
          kebabs of the southeast to the fresh seafood of the Aegean, Turkish
          cuisine is a celebration of flavors and textures. Indulge in
          traditional mezes, savor the sweetness of baklava, and enjoy the
          ritual of sipping strong Turkish tea or coffee. Every meal in Turkey
          is an experience, and foodies will find themselves captivated by the
          endless variety and mouthwatering delights.
        </p>
      </div>
    </div>
  );
};

export default TurkeyHighlight;
