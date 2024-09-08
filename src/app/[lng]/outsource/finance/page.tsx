import React from 'react'
import BannerImgComponent from "@/components/tour/single-page/common/banner";
import CustomLayout from "@/layouts/layout";
import FinanceMainPage from './FinanceMainPage';

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/accountant.jpg"
            bannerCountry="Accounting & Finance"
            animation={false}
          />
          <FinanceMainPage />
        </section>
      </CustomLayout>
    </>
  );
}

export default page