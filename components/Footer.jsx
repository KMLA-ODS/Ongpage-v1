"use client";

import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto h-auto my-4 xl:my-12  border-t-2 border-[#3B3B3B]">
      {/* Links section */}
      <div className="mt-6 xl:mt-8 text-center xl:text-left flex justify-start gap-4">
        <a className="font-bold text-[15px] xl:text-[16px]">자주하는 질문</a>
        <a className="font-bold text-[15px] xl:text-[16px]">문의하기</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-start space-x-4 my-[15px]">
        <a
          href="https://www.facebook.com/share/NRQrciXdrVKbaPef/?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-500"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ongdalsam.kmla?igsh=MWNxZXhxdzBjZ2xxZQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-pink-500 p-3 rounded-full hover:bg-pink-400"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/KMLA-ODS/ongpage-v1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
          aria-label="Twitter"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-600 p-3 rounded-full hover:bg-red-500"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Footer Text */}
      <div className="flex flex-col xl:flex-row justify-between text-[12px] xl:text-[14px] text-left">
        <div>
          민족사관고등학교 옹달샘 | 강원특별자치도 횡성군 안흥면 봉화로 800 |{" "}
          <br className="hidden xl:block" />
          대표전화 010-4676-8021 | 이메일 ongdalsam2023@gmail.com
        </div>
        <div className="mt-4 xl:mt-0 flex justify-start xl:justify-end text-[12px] text-[#828282]">
          Copyright © Kanghyeon Park. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
