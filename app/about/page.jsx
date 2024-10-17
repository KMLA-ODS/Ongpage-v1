"use client";

import Image from "next/image";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { ScrollArea, ScrollBar } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import { ScrollAreaHorizontalDemo } from "../../components/ScrollAreaHorizontalDemo"; // 경로에 따라 맞게 변경

const About = () => {
  return (
    // <section className="h-[10000px] ">
    //   {/* Banner */}
    //   <div className="h-[400px] xl:h-[315px] bg-[url('/images/AboutBanner.jpeg')] bg-cover bg-center"></div>

    //   {/* nav */}

    //   {/* contents */}
    // </section>
    <section className="h-[10000px]">
      <div className="h-[315px] xl:h-[315px] bg-[url('/images/AboutBanner.jpeg')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">옹달샘은</h2>
        </div>
      </div>
      <div className="min-h-[80vh] flex items-center justify-center relative">
        <div className="container mx-auto absolute top-[-25px]">
          <Tabs
            defaultValue="organization"
            className="w-full flex flex-col items-center"
          >
            <TabsList>
              <TabsTrigger value="organization">기관소개</TabsTrigger>
              <TabsTrigger value="values">핵심가치</TabsTrigger>
              <TabsTrigger value="greeting">인사말</TabsTrigger>
            </TabsList>

            {/* Contents */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="organization">
                {/* triangles */}
                {/* <Image
                  src="/images/tri-left.png"
                  alt="deco"
                  width={1240}
                  height={500}
                  className="absolute left-0 top-[485px]"
                ></Image>
                <Image
                  src="/images/tri-right.png"
                  alt="deco"
                  width={1240}
                  height={500}
                  className="absolute right-0 top-[555px]"
                ></Image> */}

                {/* description */}
                <div className="w-full flex flex-col items-center pt-[77px]">
                  <Image
                    src="/images/ddaomdown.svg"
                    alt="ongdalsam"
                    width={24}
                    height={24}
                  ></Image>
                  <h2 className="text-[20px] font-bold xl:text-[30px] my-[23px]">
                    가장 필요한 곳에 현지에 알맞은 방법으로.
                  </h2>
                  <Image
                    src="/images/ddaomup.svg"
                    alt="ongdalsam"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-[14px] xl:text-[20px] text-center mt-[54px]">
                    옹달샘는 2014년 설립되어 안녕하세요 저는 박강현 입니다
                    텍스트 채우고 있어요<br></br>깨끗한 식수를 필요로 하는
                    개발도상국 아동과 주민들을 위해식수 공급 및 위생교육 사업과
                    진행하는 중이죠<br></br>저희는 바로 짜잔 쿵 띠리리{" "}
                    <span className="font-semibold text-primary">
                      적정기술 해외봉사 동아리
                    </span>
                    입니다.
                  </p>
                  <div className="w-[35px] h-[2px] xl:w-[47px] xl:h-[3px] bg-[#D9D9D9] mt-[40px] xl:mt-[54px]"></div>
                </div>
                {/* history - 1 */}

                <ul className="relative mt-[60px] ">
                  <li className="relative flex flex-row-reverse">
                    <div class="circle-before"></div>
                    <dl className="relative w-[100%] lg:w-[50%] pl-[44px] lg:pl-[70px]">
                      <dt className="text-[30px] xl:text-[40px] font-bold text-primary">
                        2024
                      </dt>
                      <dd>
                        <ul className="mt-[20px]">
                          <li className="relative pl-[30px] ">
                            <span className="absolute top-0 left-0 font-bold">
                              8
                            </span>
                            제 8회 라오스 해외봉사
                          </li>
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              9
                            </span>
                            전국청소년자원봉사대회 은상
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <div class="circle-after"></div>
                  </li>
                  <li className="relative flex flex-row-reverse mt-[25px] xl:mt-[40px]">
                    <div class="circle-before"></div>

                    <dl className="relative w-[100%] lg:w-[50%] pl-[44px] lg:pl-[70px]">
                      <dt className="text-[30px] xl:text-[40px] font-bold text-primary">
                        2023
                      </dt>
                      <dd>
                        <ul className="mt-[20px] ">
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              8
                            </span>
                            제 7회 라오스 해외봉사
                          </li>
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              4
                            </span>
                            옹달샘 해외봉사 재개
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <div class="circle-after"></div>
                  </li>
                  <li className="relative flex flex-row-reverse mt-[25px] xl:mt-[40px]">
                    <div class="circle-before"></div>

                    <dl className="relative w-[100%] lg:w-[50%] pl-[44px] lg:pl-[70px]">
                      <dt className="text-[30px] xl:text-[40px] font-bold text-primary">
                        2017
                      </dt>
                      <dd>
                        <ul className="mt-[20px] ">
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              8
                            </span>
                            제 4회 라오스 해외봉사
                          </li>
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              12
                            </span>
                            APA 선정 올해의 청소년 필란트로피스트{" "}
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <div class="circle-after"></div>
                  </li>
                  <li className="relative flex flex-row-reverse mt-[25px] xl:mt-[40px]">
                    <div class="circle-before"></div>

                    <dl className="relative w-[100%] lg:w-[50%] pl-[44px] lg:pl-[70px]">
                      <dt className="text-[30px] xl:text-[40px] font-bold text-primary">
                        2014
                      </dt>
                      <dd>
                        <ul className="mt-[20px]">
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              2
                            </span>
                            옹달샘 설립
                          </li>
                          <li className="relative pl-[30px]">
                            <span className="absolute top-0 left-0 font-bold">
                              8
                            </span>
                            제 1회 베트남 해외봉사
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <div class="circle-after"></div>
                  </li>

                  <div class="line-after"></div>
                </ul>

                {/* history - 2 */}
                <div className="mt-[80px] xl:mt-[100px] xl:mb-[40px]">
                  <h2 className="font-bold text-[18px] text-left xl:text-left xl:text-[35px]">
                    라오스, 베트남, 캄보디아 등<br></br> 다양한 국가에서
                    봉사활동을 전개합니다.
                  </h2>
                  <p className="font-light text-gray-500 text-[14px] mt-2 text-left xl:text-left xl:text-[16px] xl:font-normal">
                    2023년, 코로나 19 팬데믹 이후 라오스 방비엥 마을에서{" "}
                    <br></br>
                    멤브레인 정수기 설치와 위생교육을 실시했습니다.<br></br>{" "}
                    옹달샘은 지속 가능한 발전을 위해 꾸준한 유지보수하는중
                  </p>
                </div>
                <ScrollAreaHorizontalDemo></ScrollAreaHorizontalDemo>

                {/* activities */}
              </TabsContent>

              <TabsContent value="values">b</TabsContent>

              <TabsContent value="greeting">c</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
