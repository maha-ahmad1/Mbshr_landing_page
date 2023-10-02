"use client";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Brand() {
  return (
    <div className="lg:mx-60 mb-20 mt-20 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        slidesPerView={6}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="">
          <Image
            src="/assets/image/client1.svg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client2.svg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client3.svg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client4.svg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client8.jpg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client7.jpg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client6.jpg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client5.svg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client9.jpg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client10.jpg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client11.jpeg"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/image/client12.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
