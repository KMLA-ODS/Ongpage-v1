// components

"use client";

import Stats from "../components/Stats";
import Button from "../components/ui/button";
import SwiperComponent from "../components/Swiper";

const Home = () => {
  return (
    <section className="">
      {/* banner */}

      <div className="h-[350px] xl:h-[620px] bg-[url('/images/Home_bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto h-full">
          <div className="pt-[130px] xl:pt-[220px]">
            <span className="text-white  font-semibold">2024</span>
            <h1 className="text-white mt-[15px] xl:mt-[19px] font-bold text-4xl mb-[22px] xl:text-[65px] xl:mb-[22px] xl:leading-tight  ">
              민족사관고등학교 <br></br> 옹달샘
            </h1>
            <p className="text-white xl:text-[20px]">
              국내 유일 적정기술 해외봉사 동아리
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-full">
        {/* introduction */}

        <div className="mt-[40px] mb-[20px] xl:mt-[80px] xl:mb-[40px] w-full">
          <h2 className="font-bold text-[24px] text-left xl:text-left xl:text-[35px]">
            옹달샘의 특별한 <span className="text-primary">봉사이야기</span>
          </h2>

          <div className="flex flex-col xl:flex-row justify-between items-start  xl:items-end w-full">
            <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-left xl:text-[18px] xl:font-normal">
              작은 노력이 모여 비로소 <br></br> 변화가 시작될 것이라 믿습니다.
            </p>
            <a href="https://www.instagram.com/ongdalsam.kmla?igsh=MWNxZXhxdzBjZ2xxZQ==">
              <p className="mt-2 text-gray-600">인스타그램 팔로우 -</p>
            </a>
          </div>
        </div>

        <SwiperComponent></SwiperComponent>

        {/*  */}
        <div className="container mx-auto h-[319px]">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div>text</div>
            <div>photo</div>
          </div>
        </div>
        <Stats></Stats>

        {/* award */}

        {/* activity */}

        {/* donation */}
      </div>
    </section>
  );
};

export default Home;
