"use client";
import { FC } from "react";
import { slide3 } from "@/components/common/slider-options";
import TitleThree from "@/components/common/title/title-three";
import { destinationData } from "@/data/home/flight/flight-data";
import Slider from "react-slick";
import Button from "@/components/common/btn";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const Destination: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className="blog_section destination-section section-b-space ratio_55">
      <div className="container">
        <TitleThree
          classTitle={"title-2"}
          subTitle="featured..."
          span="destination"
          desc="Unveil the secrets of diversity where adventure meets serenity........"
        />
        <Slider {...slide3} className="slide-3 no-arrow">
          {destinationData.map((data: IDestinationProps, index) => (
            <div key={index}>
              <div className="blog-wrap">
                <div className="blog-image">
                  <div>
                    <Img src={data.img} className="img-fluid bg-img" alt="" />
                  </div>
                </div>
                <div className="destination-details">
                  <div>
                    <h5>{data.country}</h5>
                    <h2>{data.place}</h2>
                    <h6>
                      Booking a flight has never been easier. Whether you're
                      planning a business trip or a vacation, you can find and
                      compare flights online in just a few clicks
                    </h6>
                    <Link href="/flight/booking/booking-now">
                      {/* <Button
                        btnClass="btn btn-rounded color2 fs-6"
                        name={`from ${symbol}${(
                          currencyValue * data.from
                        ).toFixed(0)}*`}
                      /> */}
                      <Button
                        btnClass="btn btn-rounded color2 fs-6"
                        name="Book Now"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Destination;
