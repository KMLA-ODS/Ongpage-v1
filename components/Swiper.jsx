"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const SwiperComponent = ({
  slides = [], // 이미지 배열을 props로 받음
  height = "300px", // 기본 높이
  useLinks = true,
  useNav = true,
}) => {
  return (
    <div className="relative">
      {/* Swiper */}
      <Swiper
        spaceBetween={20} // 슬라이드 간격
        slidesPerView={1.2} // 한 번에 1.2개의 슬라이드가 보이게 설정
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000, // 3초마다 전환
          disableOnInteraction: false, // 상호작용해도 자동재생 유지
        }}
        loop={true}
        navigation={{
          prevEl: ".custom-prev", // 커스텀 prev 버튼 클래스명
          nextEl: ".custom-next", // 커스텀 next 버튼 클래스명
        }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
        className="relative h-[335px]"
      >
        {slides.map(({ image, link, alt }, index) => (
          <SwiperSlide key={index}>
            <div className="w-full" style={{ height }}>
              {useLinks ? (
                <a href={link}>
                  <Image
                    src={image}
                    alt={`ongdalsam story ${index}`}
                    width={1080}
                    height={1080}
                    className="rounded-[10px]"
                  />
                </a>
              ) : (
                <Image
                  src={image}
                  alt={`ongdalsam story ${index}`}
                  width={1080}
                  height={1080}
                  className="rounded-[10px]"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="custom-prev absolute top-[-30px] right-[40px] z-10 transform -translate-y-1/2 rounded-full p-2 cursor-pointer hidden xl:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="custom-next absolute top-[-30px] right-[0px] z-10 transform -translate-y-1/2 rounded-full p-2 cursor-pointer hidden xl:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default SwiperComponent;
