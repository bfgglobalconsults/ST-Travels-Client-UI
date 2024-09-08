import React from 'react'
import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import SupportMainPage from './SupportMainPage';

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/support.jpg"
            bannerCountry="Back Office Support"
            animation={false}
          />
          <SupportMainPage />
        </section>
      </CustomLayout>
    </>
  );
}

export default page