import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import VietnamMainPage from "./vietnam-page";

const BaliPage: FC = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/vietnam-banner.jpg"
            bannerCountry="Vietnam"
            animation={true}
          />
          <VietnamMainPage />
        </section>
      </CustomLayout>
    </>
  );
};

export default BaliPage;
