import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import NairobiMainPage from "./nairobi-page";
// import TurkeyMainPage from "./turkey-page";
// import DubaiMainPage from "./dubai-page";

const DubaiPage: FC = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/nairobi-banner.jpg"
            bannerCountry="Nairobi"
            animation={true}
          />
          <NairobiMainPage />
        </section>
      </CustomLayout>
    </>
  );
};

export default DubaiPage;
