"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "전화번호",
    description: "82+ 10 4676 8021",
  },
  {
    icon: <FaEnvelope />,
    title: "이메일",
    description: "ongdalsam2023@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "주소",
    description: "강원특별자치도 횡성군 봉화로 800",
  },
];

const Contact = () => {
  return (
    <section className="mb-16">
      {/* Banner Section */}
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/ContactBanner.webp')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">문의하기</h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto mt-20 px-4">
        <div className="flex flex-col xl:flex-row w-full gap-10">
          {/* Left Section: 조직도 이미지 */}
          <div className="flex flex-col w-full xl:w-1/2">
            <h2 className="font-bold text-[25px] mb-10">조직도</h2>
            <div className="relative w-full h-[300px] xl:w-[508px] xl:h-[389px]">
              <Image
                src="/images/jojic.png"
                alt="company"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Right Section: 연락처 및 문의 폼 */}

          <div className="w-full xl:w-1/2 flex flex-col xl:pl-10">
            <h2 className="font-bold text-[25px] mb-10">연락처</h2>

            <ul className="flex flex-col gap-6 mb-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary text-white rounded-[5px] flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <h3 className="xl:text-xl text-[18px]">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>

            {/* Email Contact Form */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[25px] mb-4">문의하기</h2>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-lg font-semibold" htmlFor="name">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-primary"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-semibold" htmlFor="email">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-primary"
                    placeholder="이메일 주소를 입력하세요"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-semibold" htmlFor="message">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-primary"
                    placeholder="문의 내용을 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-3 px-5 rounded-md hover:bg-primary-dark"
                >
                  전송하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
