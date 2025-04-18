"use client";
import { FC } from "react";
import Breadcrumb from "@/components/common/breadcrumb/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Booking from "@/components/hotels/booking/booking-page/booking-main-page";

const BookingPage: FC = () => {
  return (
    <CustomLayout
      title="bg-white"
      footerPlace={true}
      userBgClass="user rounded5"
    >
      <Breadcrumb
        title="Home"
        subTitle="holiday"
        mainTitle="booking"
        bannerImg={"/assets/images/tour/tour-banner.jpg"}
      />
      <Booking />
    </CustomLayout>
  );
};

export default BookingPage;
