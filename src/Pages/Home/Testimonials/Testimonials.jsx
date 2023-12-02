import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://cypher-tech-server.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  // console.log(review);
  return (
    <section className="mb-8">
      <SectionTitle heading={"Voices of Satisfaction"}></SectionTitle>

      <Swiper
        style={{
          "--swiper-navigation-color": "#ff",
          "--swiper-pagination-color": "#ff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url(https://i.ibb.co/d7cFfMQ/ux-ui.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="mx-10 items-center text-center font-bold">
              <div className="title" data-swiper-parallax="-300">
                <p className="font-extrabold">{item.user_name}</p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Rating: {item.rating}/5
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>{item.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
