"use client";
import { FC, useEffect } from "react";
// import TabContentComponent from "../common/tab-content";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { getTourData } from "@/redux-toolkit/tour-api";
import Slider from "react-slick";
import { slide2 } from "@/components/common/slider-options";
import ProductBox from "@/components/common/elements/product-box/product-box";
// import BookingJourney from "../common/sidebar/booking-journey";
import Link from "next/link";
// import DubaiPlaceDetail from "./dubai-detail";
import TabContentComponent from "@/components/tour/single-page/common/tab-content";
import BookingJourney from "@/components/tour/single-page/common/sidebar/booking-journey";
import Booking from "@/components/hotels/booking/booking-page/booking-main-page";
import BangkokPlaceDetail from "./bangkok-detail";
import BangkokTabContentComponent from "./bangkok-tab-content";
import PayPalCheckout from "@/components/paypal/PayPalCheckout";
// import DubaiTabContentComponent from "./dubai-tab-content";

const BangkokMainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(getTourData());
  }, [dispatch]);

  return (
    <section className="single-section bg-inner small-section">
      <div className="container">
        <div className="row">
          <BangkokPlaceDetail />
          <div className="col-12 small-section pb-0">
            <div className="description-section tab-section">
              <BangkokTabContentComponent data={data} />
            </div>
          </div>
          <div className="col-12 booking-bottom-section">
            <div className="row">
              <div>
                {/* <PayPalCheckout baseAmount={1350} /> */}
              </div>
              <div className="col-md-12">
                <Booking amount={1350} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BangkokMainPage;
