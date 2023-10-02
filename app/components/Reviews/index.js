"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className=" lg:mx-48 my-20">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl ">
        <h3 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          آراء الناس{" "}
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-2xl">هل نحن معجبون؟</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* Testimonial 1 */}
        <SwiperSlide>
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/image/reviews.svg"
                className="w-32 rounded-full shadow-lg "
                alt="Photos"
                width={500}
                height={500}
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-center">
              Youssef Milad
            </h5>
            <h6 className="mb-4 font-semibold text-primary text-center">
              F&B Operation Manager
            </h6>
            <p className="mb-4 text-center">
              Great customer services as they are very approachable and quick,
              they provide 24/7 hours support
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/image/client6.jpg"
                className="w-32 rounded-full shadow-lg "
                width={500}
                height={500}
                alt="Photos"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-center">
              Fadi Rahal
            </h5>
            <h6 className="mb-4 font-semibold text-primary text-center">
              Marketing Manager{" "}
            </h6>
            <p className="mb-4 text-center">
              Great customer services, they give attention to details and
              deliver within a timeline
            </p>
          </div>
        </SwiperSlide>
        {/* Testimonial 3 */}
        <SwiperSlide>
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/image/reviews1.svg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                width={500}
                height={500}
                alt="Photos"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-center">
              Hossam Hassan{" "}
            </h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400 text-center">
              Operation Manager{" "}
            </h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300 text-center">
              Mbshr system is of great value to restaurants and cafes, as it
              enables us to reduce the number of staff
            </p>
          </div>
        </SwiperSlide>
        {/* Testimonial 2 */}
        <SwiperSlide>
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/image/reviews.svg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                width={500}
                height={500}
                alt="Photos"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-center">
              Lisa Cudrow
            </h5>
            <h6 className="mb-4 font-semibold text-primary text-center">
              Graphic Designer
            </h6>
            <p className="mb-4 text-center">
              يمكنك مع المنيو الالكتروني معرفة ما يفضله الزبائن وسلوكهم ورغباتهم
              وعليه يمكنك هندسة المنيو وتقديم وجبات مميزة تناسب رغباتهم.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
