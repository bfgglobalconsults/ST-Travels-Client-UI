import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import BaliMainPage from "./bali-page";

const BaliPage: FC = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/bali-banner2.jpg"
            bannerCountry="Bali"
            animation={true}
          />
          <BaliMainPage />
        </section>
      </CustomLayout>
    </>
  );
};

export default BaliPage;
