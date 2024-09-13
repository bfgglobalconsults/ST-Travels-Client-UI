import { FC } from "react";
import SliderFive from "@/components/common/slider-components/slide5";
import TitleThree from "@/components/common/title/title-three";
import { flightBlogData } from "@/data/home/flight/flight-data";
import TitleComponent from "@/components/common/title/title";
import Animation from "@/components/common/animation/animation";

const Blog: FC<IBlogComponentProps> = ({ title }) => {
  return (
    <section className="blog_section section-b-space ratio_55">
      <Animation />
      <div className="container">
        <TitleComponent
          title={"Our"}
          subTitle="Blog"
          span="Blog"
          titleClass={"title-3"}
        />
      <div className="container">
        {title && <TitleThree classTitle={"title-2"} subTitle="our news..." span="and blog" desc="Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard......." />}
        <SliderFive slideData={flightBlogData} />
      </div>
      </div>
    </section>
  );
};

export default Blog;
