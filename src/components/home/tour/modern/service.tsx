import { FC } from "react";
import Button from "@/components/common/btn";
import TitleThree from "@/components/common/title/title-three";
import { New, ReadMore, SomeGoodReason } from "@/constant/constant";
import { serviceData } from "@/data/home/tour/tour-data";
import Link from 'next/link';

const ServiceComponent: FC = () => {
  return (
    <section className="section-b-space">
      <div className="container">
        <TitleThree
          title={New}
          subTitle={SomeGoodReason}
          desc="Trips, experiences, and places. All in one service."
          classTitle="title-1 title-5"
        />
        <div className="row service-part">
          {serviceData.map((data: IServiceProps, index) => (
            <div className="col-lg-4" key={index}>
              <div className="service-wrapper">
                <div>
                  <h3>
                    {data.title}{" "}
                    <i className="fas fa-heart">
                      <span className="effect"></span>
                    </i>
                  </h3>
                  <h6>{data.tour}</h6>
                  <p>
                    At ST Travels, we transform journeys into unforgettable
                    experiences. Whether youre planning a quick getaway or a
                    grand adventure, our dedicated team is here to tailor your
                    travel itinerary.
                  </p>
                  <div className="service-btn">
                    <Link href="/">
                      <Button
                        btnClass="btn btn-rounded btn-sm color1"
                        name={ReadMore}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
