import Animation from '@/components/common/animation/animation';
import Breadcrumb from '@/components/common/breadcrumb/page';
import TitleThree from '@/components/common/title/title-three';
import LoginPage from '@/components/pages/other-pages/login/page';
import GlobalContent from '@/components/visa/global-visa';
import ProcessContent from '@/components/visa/process-visa';
import TextBanner from '@/components/visa/text-banner';
import TypeBanner from '@/components/visa/type-banner';
import VisaContent from '@/components/visa/type-visa';
import VisaBanner from '@/components/visa/visabanner';
import { VisaAssistance } from '@/constant/constant';
import CustomLayout from '@/layouts/layout';
import Link from 'next/link';
import {FC} from 'react';

interface VisaPageProps {
  side: "left" | "right";
}

const Page: React.FC<VisaPageProps> = ({ side }) => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <Breadcrumb
          title={"home"}
          subTitle={"visa assistance"}
          bannerImg={"/assets/images/inner-visa.jpg"}
        />
        <section className="about-section three-image about_page animated-section section-b-space">
          <Animation />
          <div className="container">
            <TitleThree classTitle="title-1" subTitle={VisaAssistance} />
            <div className="row">
              <div className="col-xl-6">
                <div className="about-text">
                  <div>
                    <div className="title-3">
                      <span className="title-label">introduction</span>
                    </div>

                    <h3>Expert Visa Assistance Services</h3>
                    <p>
                      Welcome to ST Travels & Consulting, where we specialize in
                      providing comprehensive visa assistance services to
                      travelers worldwide. With years of experience and a
                      dedicated team of visa experts, we strive to make the visa
                      application process hassle-free and efficient for our
                      clients.
                    </p>

                    {/* <div className="buttons-about">
                      <Link
                        href="/pages/blog-detail/left-sidebar"
                        className="btn btn-lower btn-curve"
                      >
                        view more
                      </Link>
                      <Link
                        href="/pages/other-pages/contact-us-1"
                        className="btn btn-lower black-btn btn-curve"
                      >
                        contact us
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className={`col-xl-6 ${side === "right" ? "order-xl-1" : ""}`}
              >
                <div className="image-section">
                  <div className="img-box">
                    <img
                      src="/assets/images/visa-img.jpg"
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
        {/* type visa */}
        <section className="about-section three-image about_page animated-section section-b-space">
          <Animation />
          <div className="container">
            <div className="row">
              <div
                className={`col-xl-6 ${side === "right" ? "order-xl-1" : ""}`}
              >
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
                      Our agency offers assistance for a wide range of visa
                      types. We provide detailed guidance on the specific
                      requirements and eligibility criteria for each visa
                      category to ensure a successful application process.
                    </p>
                    <TypeBanner />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* global content */}
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
                      the visa processing experience, offering specialized
                      support for regions with unique visa regulations and
                      procedures.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-xl-6 ${side === "right" ? "order-xl-1" : ""}`}
              >
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
        {/* process content */}
        <section className="about-section three-image about_page animated-section section-b-space">
          <Animation />
          <div className="container">
            <div className="row">
              <div
                className={`col-xl-6 ${side === "right" ? "order-xl-1" : ""}`}
              >
                <div className="image-section">
                  <div className="">
                    <img
                      src="/assets/images/process-visa.jpg"
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
                      <span className="title-label">VISA PROCESS</span>
                    </div>

                    <h3>Streamlined Visa Application Process</h3>
                    <p>
                      Our visa application process is designed to be
                      straightforward and transparent. Below is our visa
                      application process
                    </p>
                    <TextBanner />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <VisaContent side={side} />
        <GlobalContent side={side} />
        <ProcessContent side={side} /> */}

        <VisaBanner />
      </CustomLayout>
    </>
  );
};export default Page;


