import BannerImgComponent from '@/components/tour/single-page/common/banner';
import CustomLayout from '@/layouts/layout';
import React from 'react'
import ItMainPage from './ItMainPage';

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <section className="home_section p-0">
          <BannerImgComponent
            bannerImg="/assets/images/inner-pages/it-dev.jpg"
            bannerCountry="IT & Development"
            animation={false}
          />
          <ItMainPage />
        </section>
      </CustomLayout>
    </>
  );
}

export default page