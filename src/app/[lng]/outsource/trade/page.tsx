import React from 'react'
import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import TradeMainPage from './TradeMainPage';

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/trade.jpg"
            bannerCountry="Trade & Commerce"
            animation={false}
          />
          <TradeMainPage />
        </section>
      </CustomLayout>
    </>
  );
}

export default page