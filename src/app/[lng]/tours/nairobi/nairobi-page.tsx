"use client";
import { FC, useEffect } from "react";
// import TabContentComponent from "../common/tab-content";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { getTourData } from "@/redux-toolkit/tour-api";
import Slider from "react-slick";
import { slide2 } from "@/components/common/slider-options";
import ProductBox from "@/components/common/elements/product-box/product-box";
import Link from "next/link";
import TabContentComponent from "@/components/tour/single-page/common/tab-content";
import BookingJourney from "@/components/tour/single-page/common/sidebar/booking-journey";
import Booking from "@/components/hotels/booking/booking-page/booking-main-page";
// import TurkeyPlaceDetail from "./turkey-detail";
// import TurkeyTabContentComponent from "./turkey-tab-content";
import NairobiTabContentComponent from "./nairobi-tab-content";
import NairobiPlaceDetail from "./nairobi-detail";
import PayPalCheckout from "@/components/paypal/PayPalCheckout";
// import DubaiTabContentComponent from "./dubai-tab-content";

const NairobiMainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(getTourData());
  }, [dispatch]);

  return (
    <section className="single-section bg-inner small-section">
      <div className="container">
        <div className="row">
          <NairobiPlaceDetail />
          <div className="col-12 small-section pb-0">
            <div className="description-section tab-section">
              <NairobiTabContentComponent data={data} />
            </div>
          </div>
          <div className="col-12 booking-bottom-section">
            <div className="row">
              <div>
                <PayPalCheckout baseAmount={999} />
              </div>
              <div className="col-md-12">
                <Booking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NairobiMainPage;
