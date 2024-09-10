import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import BangkokMainPage from "./bangkok-page";

const BaliPage: FC = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/bangkok-banner2.jpg"
            bannerCountry="Bangkok"
            animation={true}
          />
          <BangkokMainPage />
        </section>
      </CustomLayout>
    </>
  );
};

export default BaliPage;
