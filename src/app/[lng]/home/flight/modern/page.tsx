"use client";
import { FC } from "react";
import CustomLayout from "@/layouts/layout";
// import "@/public/assets/scss/color1.scss";
import HomeBanner from "@/components/home/flight/modern/home-banner";
import Destination from "@/components/home/flight/modern/destination";
import AirlinesDetail from "@/components/home/flight/modern/airlines-detail";
import FlightRoute from "@/components/home/flight/modern/flight-route";
import FullBanner from "@/components/home/flight/modern/full-banner";
import AirlineTickets from "@/components/home/flight/modern/airline-tickets";
import TopDestination from "@/components/home/flight/modern/top-destination";
import Blog from "@/components/home/flight/modern/blog";
import SubscribeComp from "@/components/home/flight/modern/subscribe";
import { useSelector } from "react-redux";
import TourHomePage from "@/components/home/tour/modern/home-page";
import OutsourceComponent from "@/components/home/hotels/classic/outsource";
import TopDealsComponent from "@/components/home/hotels/minimal/top-deals";

const Modern: FC = () => {
  	// const user = useSelector((state:any) => state.user.user.data);

  return (
    <CustomLayout title="bg-white" footerPlace={true} userBgClass="user rounded5">
      <HomeBanner />
      <Destination />
      <AirlinesDetail />
      <FlightRoute />
      <TourHomePage />
      <TopDealsComponent />
      <OutsourceComponent />
      {/* <FullBanner />
      <AirlineTickets />
      <TopDestination /> */}
      <Blog />
      <SubscribeComp />
    </CustomLayout>
  );
};

export default Modern;
