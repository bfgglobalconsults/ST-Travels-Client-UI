import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import OurTeamContent from "@/components/pages/other-pages/about-us/our-team";
import AboutUsContent from "@/components/pages/other-pages/about-us/page";
import CustomLayout from "@/layouts/layout";
import Blog from "@/components/pages/other-pages/about-us/blog";
import ServiceContent from "@/components/pages/other-pages/about-us/service";
import Reviews from "@/components/home/hotels/classic/reviews";
import ServiceComponent from "@/components/home/tour/modern/service";

const AboutUs2: FC = () => {
  return (
    <CustomLayout title="bg-white" userBgClass="user rounded5">
      <Breadcrumb
        title={"home"}
        subTitle={"about us"}
        videoPath={"/assets/video/sea.mp4"}
      />
      <AboutUsContent side={"right"} />
      <ServiceContent />
      <ServiceComponent />
      <Reviews />
      {/* <OurTeamContent /> */}
      <Blog />
    </CustomLayout>
  );
};

export default AboutUs2;
