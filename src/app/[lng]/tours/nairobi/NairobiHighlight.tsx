import AboutSec from "@/components/tour/single-page/common/sections/high-light.tsx/about-sec";
import Img from "@/utils/BackgroundImageRatio";
// import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";
import NairobiAboutSec from "./nairobi-about-sec";
// import TurkeyAboutSec from "./turkey-about-sec";
// import DubaiAboutSec from "./dubai-about-sec";

const NairobiHighlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <NairobiAboutSec />
      <div className="detail-img">
        <Img
          src="/assets/images/tour/nairobi-banner.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="about-sec ">
        <h6>A Road Trip Along Nairobi's Mediterranean Coast</h6>
        <p>
          Embark on a road trip from Nairobi and discover the breathtaking
          landscapes that surround the city. Whether you're heading towards the
          Great Rift Valley with its dramatic escarpments and lakes or exploring
          the lush tea plantations of Limuru, the roads leading out of Nairobi
          are filled with scenic wonders. The journey offers a mix of natural
          beauty and vibrant local culture, making every mile a memorable part
          of your adventure.
        </p>
        <h6>The History of Turkey's Great Civilisations</h6>
        <p>
          Nairobi may be a modern metropolis, but it is deeply rooted in
          history. The city’s growth from a humble railway depot to Kenya’s
          capital is a story of resilience and transformation. Dive into Kenya’s
          rich history at the Nairobi National Museum, where you can trace the
          heritage of the country’s great civilizations, from the early hominids
          in the Rift Valley to the cultures that have shaped modern Kenya.
          Additionally, the Karen Blixen Museum offers insights into the
          colonial era and the life of the famous author of Out of Africa.
        </p>
        <h6>Foodies, Prepare to Be Enthused</h6>
        <p className="bottom-space">
          Nairobi’s food scene is a melting pot of flavors, influenced by
          Kenya’s diverse cultures and global connections. From street food
          stalls serving up sizzling nyama choma (grilled meat) to upscale
          restaurants offering contemporary Kenyan cuisine, the city is a haven
          for food lovers. Don’t miss the chance to try local dishes like ugali,
          sukuma wiki, and mandazi, or indulge in Nairobi’s thriving café
          culture with a cup of rich Kenyan coffee. For a truly immersive
          experience, explore the city’s bustling markets and sample fresh,
          locally-sourced produce.
        </p>
      </div>
    </div>
  );
};

export default NairobiHighlight;
