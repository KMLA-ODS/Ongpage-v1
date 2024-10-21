// components

"use client";

import Stats from "../components/Stats";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import SwiperComponent from "../components/Swiper";
import ActivitySwiper from "../components/ActivitySwiper";

const Home = () => {
  return (
    <section className="h-[5000px]">
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

        <div className="w-full mt-[70px] xl:mt-[180px]  flex flex-col xl:flex-row">
          <div className="w-[100%] xl:w-[50%] flex flex-col">
            <h2 className="text-center font-bold text-[20px] xl:text-[25px] py-5">
              수상
            </h2>
            <div className=" w-[100%] flex">
              <div className="w-[50%] flex flex-col justify-between items-center text-center">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/apa.png"
                    alt={`apa philanthropist`}
                    width={1080}
                    height={1080}
                  />
                </div>{" "}
                <p>
                  {" "}
                  APA 선정 2017 올해의 <br></br> 청소년 필란트로피스트
                </p>
              </div>
              <div className="w-[50%] flex flex-col justify-between items-center text-center">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/prize.png"
                    alt={`prize`}
                    width={1080}
                    height={1080}
                  />
                </div>{" "}
                <p className="xl:mt-5">
                  2024 <br className="sm:hidden"></br> 전국청소년자원봉사대회{" "}
                  <br></br> 보건복지부 장관상 수상
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] xl:w-[50%] flex flex-col xl:mt-0 mt-10">
            <h2 className="text-center font-bold text-[20px] xl:text-[25px] py-5">
              협력
            </h2>
            <div className="w-[100%] flex">
              <div className="w-[50%] flex flex-col justify-between items-center text-center">
                <div className="w-[120px] h-[120px] ">
                  <Image
                    src="/images/kia.png"
                    alt={`prize`}
                    width={1080}
                    height={1080}
                    className=""
                  />
                </div>{" "}
                <p>희망친구 기아대책</p>
              </div>
              <div className="w-[50%] flex flex-col justify-between items-center text-center ">
                <div className="w-[120px] h-[120px]">
                  <Image
                    src="/images/koica.png"
                    alt={`prize`}
                    width={1080}
                    height={1080}
                  />
                </div>{" "}
                <p>KOICA 라오스 사무소</p>
              </div>
            </div>
          </div>
        </div>

        {/* activity */}
        <ActivitySwiper></ActivitySwiper>

        {/* donation */}
        <div className="w-full mt-[80px] xl:mt-[140px]">
          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
            나에게 맞는 맞춤후원
          </h2>
          <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-center xl:text-[18px] xl:font-normal mb-4 xl:mb-10">
            당신의 소중한 후원으로 세상이 따뜻하게 바뀝니다.
          </p>

          <div className="flex flex-col xl:flex-row gap-5 justify-center">
            <div className="w-full h-[150px] xl:h-[351px] xl:max-w-[351px] relative">
              <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                <h2 className=" z-20 font-bold text-[20px] text-white">
                  일시후원
                </h2>
              </div>
              <Image
                src="/images/m-donation1.jpeg"
                alt={`donation 1`}
                layout="fill" // 부모 요소 크기 맞춤
                objectFit="cover" // 이미지가 부모 요소에 꽉 차도록
              />
            </div>
            <div className="w-full h-[150px] xl:h-[351px] xl:max-w-[351px] relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                <h2 className=" z-20 font-bold text-[20px] text-white">
                  정기후원
                </h2>
              </div>{" "}
              <Image
                src="/images/m-donation2.jpeg"
                alt={`donation 2`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full h-[150px] xl:h-[351px] xl:max-w-[351px] relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 hover:bg-opacity-40 z-10 flex justify-center items-center">
                <h2 className=" z-20 font-bold text-[20px] text-white">
                  물품지원
                </h2>
              </div>{" "}
              <Image
                src="/images/m-donation3.jpeg"
                alt={`donation 3`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <h3 className="mt-6 xl:ml-[70px] font-light text-gray-600">
            후원금 전액은 개발도상국 아이들을 위한{" "}
            <br className="sm:hidden"></br> 위생용품 지원과 가람정수기 보급에
            사용됩니다.<br></br> 자세한 사용처는 정기 소식지로 확인하실 수
            있습니다.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
