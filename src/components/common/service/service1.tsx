import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Button from "@/components/common/btn";
import Link from "next/link";


const ServiceOne: FC<IServiceOneProps> = ({ serviceData }) => {
  return (
    <div className="service_section row">
      {serviceData.map((service: IServiceClassicProps, index) => (
        <div key={index} className="col-lg-4 col-6">
          <div className="service-wrap">
            <div>
              <div className="service-icon">
                <Img src={service.src} className="img-fluid" alt="" />
              </div>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
              <Link href={service.link}>
                <Button
                  btnClass="my-3 btn btn-curve btn-lower color1"
                  name="View"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceOne;
