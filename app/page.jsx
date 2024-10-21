// components

"use client";

import Stats from "../components/Stats";
import Link from "next/link";
import { Button } from "../components/ui/button";
import SwiperComponent from "../components/Swiper";

const Home = () => {
  return (
    <section className="">
      {/* banner */}

      <div className="h-[390px] xl:h-[620px] bg-[url('/images/Home_bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto h-full">
          <div className="pt-[140px] xl:pt-[220px]">
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

        <div className="mt-[60px] mb-[20px] xl:mt-[100px] xl:mb-[40px] w-full">
          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
            옹달샘의 특별한 <span className="text-primary">봉사 이야기</span>
          </h2>

          <div className="flex flex-col xl:flex-row justify-center items-start xl:items-end w-full ">
            <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-left xl:text-[18px] xl:font-normal">
              작은 노력이 모여 비로소 <br className="sm:hidden"></br> 변화가
              시작될 것이라 믿습니다.
            </p>
            <a href="https://www.instagram.com/ongdalsam.kmla?igsh=MWNxZXhxdzBjZ2xxZQ==">
              <p className="mt-2 text-gray-600 sm:hidden">
                인스타그램 팔로우 -
              </p>
            </a>
          </div>
        </div>

        <SwiperComponent></SwiperComponent>

        {/* numbers */}
        <div className="w-full mt-[40px] xl:mt-[140px]">
          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
            옹달샘은?
          </h2>
          <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-center xl:text-[18px] xl:font-normal">
            민족사관고등학교 학생들이 운영하는
            <br className="sm:hidden"></br>
            <span className="font-semibold"> 적정기술</span> 해외봉사
            동아리입니다.
          </p>

          <Stats></Stats>
        </div>

        {/* award */}

        {/* activity */}
        {/* <div className="w-full h-[319px] mt-10 ">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:w-[50%]">
            <div className="w-full">
              <h2 className="font-semibold text-[20px] text-left xl:text-left xl:text-[35px] xl:font-bold">
                <i>01 </i> 해외봉사
              </h2>
              <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-[18px] xl:font-normal">
                2023년, 코로나 19 팬데믹 이후 라오스 방비엥 마을에서 봉사를
                재개하여 멤브레인 정수기 설치와 위생교육을 실시했습니다.
                옹달샘은 지속 가능한 발전을 위해 꾸준한 유지보수를 중시하며.
              </p>
              <Link href={"/donation"}>
                <Button
                  size="lg"
                  className="bg-primary rounded-[5px] text-[15px] font-medium"
                >
                  더 알아보기
                </Button>{" "}
              </Link>
            </div>
            <div>photo</div>
          </div>
        </div> */}
        {/* donation */}
      </div>
    </section>
  );
};

export default Home;
