import React, { useEffect } from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import BookingForm from "../components/BookingForm";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="hero_slide">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="hero_left">
                    <p>Travel securely with us!</p>
                    <h2>
                      Book your taxi from <br /> anywhere today
                    </h2>
                    <p>
                      Everything your taxi business needs is already here!{" "}
                      <br /> Ridek made for taxi service companies!
                    </p>
                    <Link to={"/contact"}>Book Now</Link>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <img
                    src={require("../assets/images/car-1.png")}
                    alt="Car"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_slide">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="hero_left">
                    <p>Travel securely with us!</p>
                    <h2>
                      Book your taxi from <br /> anywhere today
                    </h2>
                    <p>
                      Everything your taxi business needs is already here!{" "}
                      <br /> Ridek made for taxi service companies!
                    </p>
                    <Link to={"/contact"}>Book Now</Link>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <img
                    src={require("../assets/images/car-1.png")}
                    alt="Car"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_slide">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="hero_left">
                    <p>Travel securely with us!</p>
                    <h2>
                      Book your taxi from <br /> anywhere today
                    </h2>
                    <p>
                      Everything your taxi business needs is already here!{" "}
                      <br /> Ridek made for taxi service companies!
                    </p>
                    <Link to={"/contact"}>Book Now</Link>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <img
                    src={require("../assets/images/car-1.png")}
                    alt="Car"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <BookingForm />
    </div>
  );
}

export default Home;
