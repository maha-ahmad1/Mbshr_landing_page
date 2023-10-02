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
  const breakpoints = {
    // When window width is >= 768px
    452: {
      slidesPerView: 1,
    },
    // When window width is >= 992px
    992: {
      slidesPerView: 3,
    },
  };
  return (
    <div className=" lg:mx-48 my-20">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl ">
        <h3 className="mb-10 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          قالوا عن مبشر
        </h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={breakpoints}
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
              حسام حسن{" "}
            </h5>
            <h6 className="mb-4 font-semibold text-primary text-center">
              مدير التشغيل{" "}
            </h6>
            <p className="mb-4 text-center">
              مبشر هو نظام يقدم قيمة عالية للمطاعم والكافيهات حيث يساعدك في
              تقليل عدد الموظفين ويوفر وقت وجهد الموظفين.
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
              فادي رحال{" "}
            </h5>
            <h6 className="mb-4 font-semibold text-primary text-center">
              مدير التسويق{" "}
            </h6>
            <p className="mb-4 text-center">
              ممتازين جدا وشغلهم دقيق وسريع في الموعد . لا يوجد أي أعطال تقنية .
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
              يوسف ميلاد{" "}
            </h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400 text-center">
              مدير التشغيل{" "}
            </h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300 text-center">
              مبشر شركة متميزة وتعاملها جدا راقي و خدمة سريعة عن تجربة حقيقية و
              خدمة على مدار الساعة متواجدين في الدعم الفني .
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
