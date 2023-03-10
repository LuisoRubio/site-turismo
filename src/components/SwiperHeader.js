import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/index.css";

// import required modules
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";

// import images and creating the array
import slide1 from "../assets/img/img1.jpg";
import slide2 from "../assets/img/img2.jpg";
import slide3 from "../assets/img/img3.jpg";
const imgs = [slide1, slide2, slide3];

const SwiperHeader = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        // pagination = {{
        //   clickable: true,
        // }}

        navigation={false}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgs.map((img) => (
          <SwiperSlide>
            <img key={img} src={img} alt={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperHeader;
