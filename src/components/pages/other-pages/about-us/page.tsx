import Animation from "@/components/common/animation/animation";
import TitleThree from "@/components/common/title/title-three";
import { AboutUs } from "@/constant/constant";
import { imageData } from "@/data/pages/all-page";
import { FC } from "react";
import Link from "next/link";

const AboutUsContent: FC<IAboutUsContentProps> = ({ side }) => {
  return (
    <section className="about-section three-image about_page animated-section section-b-space">
      <Animation />
      <div className="container">
        <TitleThree classTitle="title-1" subTitle={AboutUs} />
        <div className="row">
          <div className={`col-xl-7 ${side === "right" ? "order-xl-1" : ""}`}>
            <div className="image-section">
              {imageData.map((image: IImageProps, index: number) => (
                <div key={index} className="img-box">
                  <img
                    src={image.src}
                    data-tilt
                    data-tilt-perspective="110"
                    data-tilt-speed="400"
                    data-tilt-max="1.2"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="title-box">
                    <h3>{image.title}</h3>
                    <h6>{image.subTitle}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-text">
              <div>
                <div className="title-3">
                  <span className="title-label">introduction</span>
                </div>

                <h2>Welcome to ST Travels and Consulting</h2>
                <p>
                  At ST Travels and Consulting, we believe that travel is not
                  just about reaching a destination. We are founded on the
                  principle of making travel experiences exceptional and
                  hassle-free. We are dedicated to providing personalized
                  services that cater to the diverse needs and preferences of
                  our clients. We also offer outsourcing services to streamline the operational needs of
                  other travel agencies. Our expert team handles everything from
                  customer support, itinerary planning, booking management, and
                  ticketing to visa assistance. By outsourcing to us, travel
                  agencies can focus on core business functions while ensuring
                  their clients receive seamless and top-tier services. Let us
                  manage the details so you can focus on delivering
                  unforgettable travel experiences.
                </p>
                {/* <img
                  src="/assets/images/mix/signature.png"
                  className="img-fluid"
                  alt=""
                /> */}
                <div className="buttons-about">
                  {/* <Link
                    href="/pages/blog-detail/left-sidebar"
                    className="btn btn-lower btn-curve"
                  >
                    view more
                  </Link> */}
                  <Link
                    href="/pages/other-pages/contact-us-1"
                    className="btn btn-lower black-btn btn-curve"
                  >
                    contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
