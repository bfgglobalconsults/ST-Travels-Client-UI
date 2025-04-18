import React from 'react'
import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import SalesMainPage from './SalesMainPage';

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/market-sales.jpg"
            bannerCountry="Marketing & Sales"
            animation={false}
          />
          <SalesMainPage />
        </section>
      </CustomLayout>
    </>
  );
}

export default page