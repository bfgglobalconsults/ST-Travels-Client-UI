import Animation from "@/components/common/animation/animation";
import TitleThree from "@/components/common/title/title-three";
import { AboutUs } from "@/constant/constant";
import { imageData } from "@/data/pages/all-page";
import { FC } from "react";
import Link from "next/link";
import TypeBanner from "./type-banner";

const VisaContent: FC<IAboutUsContentProps> = ({ side }) => {
  return (
    <section className="about-section three-image about_page animated-section section-b-space">
      <Animation />
      <div className="container">
        <div className="row">
          <div className={`col-xl-6 ${side === "right" ? "order-xl-1" : ""}`}>
            <div className="image-section">
              <div className="">
                <img
                  src="/assets/images/type-visa.jpg"
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
          <div className="col-xl-6">
            <div className="about-text">
              <div>
                <div className="title-3">
                  <span className="title-label">TYPES OF VISA</span>
                </div>

                <h3>Types of Visas We Assist With</h3>
                <p>
                  Our agency offers assistance for a wide range of visa types.
                  We provide detailed guidance on the specific requirements and
                  eligibility criteria for each visa category to ensure a
                  successful application process.
                </p>
                <TypeBanner />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaContent;
