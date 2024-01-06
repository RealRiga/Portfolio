import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const TestimonialSlider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
        >
            <ClientReview
            image="/image/fresh.jpg"
            name="Mr. Obed Jonathan"
            role="Software Developer"
            text="Service rendered perfectly"
            />
            <ClientReview
            image="/image/eze.jpg"
            name="Mr. Ezechukwu Williams Ojukwu "
            role="Web & Mobile Developer"
            text="Punctual and Efficient"
            />
            <ClientReview
            image="/image/ife.jpg"
            name="Mr. Ariyo Joey"
            role="Web & Mobile Developer"
            text="Excellent vision and understanding of each task given"
            />
        </Carousel>
  );
};

export default TestimonialSlider;