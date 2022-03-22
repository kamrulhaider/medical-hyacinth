import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import sliderOne from '../../../images/slider-1.png';
import sliderTwo from '../../../images/slider-2.png';
import sliderThree from '../../../images/slider-3.png';


const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mb-8"
            >
                <SwiperSlide>
                    <img className="w-full" src={sliderOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={sliderTwo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={sliderThree} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;