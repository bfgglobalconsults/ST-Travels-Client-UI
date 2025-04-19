"use client";
import { FC } from "react";
import Breadcrumb from "@/components/common/breadcrumb/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Booking from "@/components/hotels/booking/booking-page/booking-main-page";

interface BookingPageProps {
  amount?: number;
}

const BookingPage: FC<BookingPageProps> = ({amount = 0}) => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light">
      <Breadcrumb title="Home" subTitle="hotels" mainTitle="Booking" bannerImg={"/assets/images/inner-pages/bg-bread.jpg"} />
      <Booking amount={amount} />
    </CustomLayout>
  );
};

export default BookingPage;
