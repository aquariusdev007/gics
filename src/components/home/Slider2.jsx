/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider2() {
  return (
    <>
    <div className="slider-back">
    <div className="slider-header">
    <h1>Offered Courses</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/free-photo/field-with-oil-pump-jacks-surrounded-by-greenery-sunlight_181624-9217.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/premium-photo/oil-refinery-twilight-aerial-view-petrochemical-plant-oil-refinery-plant_35024-660.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/free-photo/working-process-pump-jack-engineers-oil-field-sunny-day_651396-2456.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/free-photo/workers-standing-checking-beside-working-oil-pumps_1150-19217.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/free-photo/semi-submersible-oil-rig-vessel_1401-372.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/premium-photo/steel-long-pipes-pipe-elbow-station-oil-factory-during-refinery-petrochemistry-industry_478515-7739.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/free-photo/oil-worker-orange-uniform-helmet-background-pump-jack-blue-sky_651396-3349.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/premium-photo/industrial-furnace-heat-exchanger-cracking-hydrocarbons-factory-sky-sunset-close-up-equipment-petrochemical-plant_168569-9.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <h2>Oil Refinery </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ea voluptatum explicabo sed excepturi id maiores, quia non laboriosam.</p>
          <img src="https://img.freepik.com/premium-photo/oil-pump-sunset-world-oil-industry_209004-17.jpg?size=626&ext=jpg&uid=R90993007&ga=GA1.1.1140948482.1674645338&semt=sph" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  );
}
