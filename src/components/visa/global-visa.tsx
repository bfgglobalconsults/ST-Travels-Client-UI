import Animation from "@/components/common/animation/animation";
import TitleThree from "@/components/common/title/title-three";
import { AboutUs } from "@/constant/constant";
import { imageData } from "@/data/pages/all-page";
import { FC } from "react";
import Link from "next/link";

const GlobalContent: FC<IAboutUsContentProps> = ({ side }) => {
    return (
      <section className="about-section three-image about_page animated-section section-b-space">
        <Animation />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-text">
                <div>
                  <div className="title-3">
                    <span className="title-label">GLOBAL ASSISTANCE</span>
                  </div>

                  <h3>Global Visa Assistance Coverage</h3>
                  <p>
                    We extend our visa assistance services to destinations
                    across the globe, covering popular tourist destinations,
                    business hubs, academic institutions, and more. Our
                    extensive network and partnerships enable us to streamline
                    the visa processing experience, offering specialized support
                    for regions with unique visa regulations and procedures.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-xl-6 ${side === "right" ? "order-xl-1" : ""}`}>
              {" "}
              <div className="image-section">
                <div className="">
                  <img
                    src="/assets/images/global-visa.jpg"
                    data-tilt
                    data-tilt-perspective="110"
                    data-tilt-speed="400"
                    data-tilt-max="1.2"
                    className="img-fluid"
                    alt="visa-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default GlobalContent;