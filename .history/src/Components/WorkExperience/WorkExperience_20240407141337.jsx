import { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import "./WorkExperience.css";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        <div className="arrow-right">
          <IoIosArrowForward />
        </div>
        <div className="arrow-left">
          <IoIosArrowBack />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
