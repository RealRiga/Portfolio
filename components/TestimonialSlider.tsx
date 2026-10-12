'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5500}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="pb-4"
        showDots={false}
      >
        <ClientReview
          image="/image/fresh.jpg"
          name="Mr. Obed Jonathan"
          role="Software Engineer & Lead"
          text="Adeola delivered exceptional software work on time and with impressive code quality. His attention to detail in frontend responsiveness and backend reliability is top-tier."
          project="Web Platform & Cloud API"
        />
        <ClientReview
          image="/image/eze.jpg"
          name="Mr. Ezechukwu Williams Ojukwu"
          role="Web & Mobile Engineer"
          text="Working with Only1Riga was seamless. Highly punctual, proactive with architecture suggestions, and delivers clean maintainable components that exceed requirements."
          project="Full-Stack Application"
        />
        <ClientReview
          image="/image/ife.jpg"
          name="Mr. Ariyo Joey"
          role="Product Engineer & Mobile Dev"
          text="Adeola has an outstanding ability to grasp complex product requirements quickly and execute them into intuitive user experiences. Highly recommended for any serious team."
          project="Mobile & Dashboard Experience"
        />
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;