"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Reviews() {
  return (
    <div className=" lg:mx-48 my-20">
      <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl ">
        <h3 class="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          Testimonials
        </h3>
        <p class="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {/* Testimonial 1 */}
        <SwiperSlide>
          <div class="mb-12 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
            <h6 class="mb-4 font-semibold text-primary">Web Developer</h6>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
          </div>
        </SwiperSlide>
        {/* Testimonial 2 */}
        <SwiperSlide>
          <div class="mb-12 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
            <h6 class="mb-4 font-semibold text-primary">Graphic Designer</h6>
            <p class="mb-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
          </div>
        </SwiperSlide>
        {/* Testimonial 3 */}
        <SwiperSlide>
          <div class="mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
            <h6 class="mb-4 font-semibold text-primary dark:text-primary-400">
              Marketing Specialist
            </h6>
            <p class="mb-4 text-neutral-600 dark:text-neutral-300">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
            <h6 class="mb-4 font-semibold text-primary dark:text-primary-400">
              Marketing Specialist
            </h6>
            <p class="mb-4 text-neutral-600 dark:text-neutral-300">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div class="mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
            <h6 class="mb-4 font-semibold text-primary dark:text-primary-400">
              Marketing Specialist
            </h6>
            <p class="mb-4 text-neutral-600 dark:text-neutral-300">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
            <h6 class="mb-4 font-semibold text-primary dark:text-primary-400">
              Marketing Specialist
            </h6>
            <p class="mb-4 text-neutral-600 dark:text-neutral-300">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
