import AboutSec from "@/components/tour/single-page/common/sections/high-light.tsx/about-sec";
import Img from "@/utils/BackgroundImageRatio";
// import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";
import DubaiAboutSec from "./dubai-about-sec";

const DubaiHighlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <DubaiAboutSec />
      <div className="detail-img">
        <Img
          src="/assets/images/tour/dubai-image3.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="about-sec ">
        <h6>A Road Trip Along Dubai's Mediterranean Coast</h6>
        <p>
          While Dubai doesn't have a Mediterranean coast, a road trip along its
          Arabian Gulf coastline offers an equally breathtaking experience. The
          journey reveals stunning views of the azure waters, with luxurious
          resorts, golden beaches, and iconic landmarks like the Burj Al Arab
          lining the shore. As you drive, you can explore vibrant neighborhoods
          like Jumeirah, where modernity meets traditional charm. Stop by La Mer
          for a beachside stroll or head to the Dubai Marina to marvel at the
          glittering skyline. This coastal drive is a perfect way to soak in
          Dubai’s unique blend of urban sophistication and natural beauty.
        </p>
        <h6>The History of Dubai's Great Civilisations</h6>
        <p>
          Dubai's history is deeply rooted in its connection to ancient
          civilizations that thrived in the Arabian Peninsula. Long before the
          skyscrapers and luxury malls, Dubai was a humble trading post known
          for its pearl diving industry. Archaeological evidence suggests that
          the area was inhabited as far back as 3,000 BCE, with trade links to
          the Indus Valley and Mesopotamian civilizations. The influence of
          these early cultures can still be seen today in Dubai's traditional
          souks and the historic Al Fahidi neighborhood. Over the centuries,
          Dubai evolved from a desert settlement to a bustling port city,
          eventually becoming the global hub it is today.
        </p>
        <h6>Foodies, Prepare to Be Enthused</h6>
        <p className="bottom-space">
          Dubai is a culinary paradise that offers a diverse range of flavors
          from around the world. From traditional Emirati dishes like Al
          Machboos and Luqaimat to gourmet international cuisine, the city
          caters to every palate. Foodies can indulge in luxurious dining
          experiences at world-renowned restaurants or explore the vibrant
          street food scene, where flavors from India, Lebanon, and beyond merge
          in delicious harmony. Don’t miss out on the bustling food markets and
          festivals, where you can sample everything from artisanal chocolates
          to exotic spices. Whether you’re craving Michelin-starred fare or a
          humble shawarma, Dubai’s food scene is sure to enthuse and satisfy.
        </p>
      </div>
    </div>
  );
};

export default DubaiHighlight;
