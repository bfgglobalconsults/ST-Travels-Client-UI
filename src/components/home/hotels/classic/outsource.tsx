"use client";
import { AwesomeService, Rica, Service } from "@/constant/constant";
import TitleComponent from "@/components/common/title/title";
import { outsource, services } from "@/data/home/hotel/hotel-data";
import ServiceOne from "@/components/common/service/service1";
import Animation from "@/components/common/animation/animation";
import Outsources from "@/components/common/service/outsources";


const OutsourceComponent: React.FC = () => {
  return (
    <section className="section-b-space animated-section">
      <Animation />
      <div className="container">
        <TitleComponent
          title={"Our"}
          subTitle="Outsourcing Service"
          span={Service}
          titleClass={"title-3"}
        />
        <Outsources serviceData={outsource} />
      </div>
    </section>
  );
};

export default OutsourceComponent;
