import React from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

function Home() {
  return (
    <div>
      <Header />
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img src={require("../assets/images/slider-bg.jpg")} alt="Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../assets/images/slider-bg.jpg")} alt="Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../assets/images/slider-bg.jpg")} alt="Slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
