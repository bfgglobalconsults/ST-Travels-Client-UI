import Animation from '@/components/common/animation/animation';
import Breadcrumb from '@/components/common/breadcrumb/page';
import TitleThree from '@/components/common/title/title-three';
import LoginPage from '@/components/pages/other-pages/login/page';
import GlobalContent from '@/components/visa/global-visa';
import ProcessContent from '@/components/visa/process-visa';
import VisaContent from '@/components/visa/type-visa';
import VisaBanner from '@/components/visa/visabanner';
import { VisaAssistance } from '@/constant/constant';
import CustomLayout from '@/layouts/layout';
import Link from 'next/link';
import {FC} from 'react';

interface VisaPageProps {
  side: "left" | "right";
}

const VisaPage: React.FC<VisaPageProps> = ({ side }) => {
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
        {/* <VisaContent side={side} />
        <GlobalContent side={side} />
        <ProcessContent side={side} />
        <VisaBanner /> */}
      </CustomLayout>
    </>
  );
};

export default VisaPage;