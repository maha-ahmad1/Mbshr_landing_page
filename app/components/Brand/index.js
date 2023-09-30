'use client';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Brand () {
  return (
    <div className='mx-60 mb-20 mt-20'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={5}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
    </Swiper>
    </div>
  );
};