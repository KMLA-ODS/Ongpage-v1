import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
const SwiperComponent = () => {
  return (
    <div>
      {/* Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000, // 3초마다 전환
          disableOnInteraction: false, // 상호작용해도 자동재생 유지
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="relative h-[335px]"
      >
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story1.jpg"
              alt="ongdalsam story 1 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story2.jpg"
              alt="ongdalsam story 2 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story3.jpg"
              alt="ongdalsam story 3 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story4.jpg"
              alt="ongdalsam story 4 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story5.jpg"
              alt="ongdalsam story 5 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story6.jpg"
              alt="ongdalsam story 6 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[335px] object-cover">
            <Image
              src="/images/Story7.jpg"
              alt="ongdalsam story 7 "
              width={1080}
              height={1080}
            ></Image>
          </div>
        </SwiperSlide>

        {/* <div className="swiper-pagination mt-4"></div> */}

        {/* Navigation buttons */}
      </Swiper>

      <div className="flex w-full my-4 ">
        <div className=" h-[10px] w-[70%] relative">
          <div className="swiper-pagination top-[50%]"></div>
        </div>
        <div className="flex justify-between relative h-[10px] w-[30%] text-[18px]">
          <button className="swiper-button-prev relative"></button>
          <button className="swiper-button-next relative"></button>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
