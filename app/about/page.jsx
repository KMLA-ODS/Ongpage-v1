"use client";

import Image from "next/image";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    // <section className="h-[10000px] ">
    //   {/* Banner */}
    //   <div className="h-[400px] xl:h-[315px] bg-[url('/images/AboutBanner.jpeg')] bg-cover bg-center"></div>

    //   {/* nav */}

    //   {/* contents */}
    // </section>
    <section className="h-[10000px]">
      <div className="h-[400px] xl:h-[315px] bg-[url('/images/AboutBanner.jpeg')] bg-cover bg-center"></div>
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
                {/* description */}
                <div className="w-full flex flex-col items-center pt-[77px]">
                  <Image
                    src="/images/ddaomdown.svg"
                    alt="ongdalsam"
                    width={24}
                    height={24}
                  ></Image>
                  <h2 className="text-[23px] font-bold xl:text-[30px] my-[23px]">
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
                    <dl className="relative w-[50%] pl-[70px]">
                      <dt className="text-[40px] font-bold text-primary">
                        2024
                      </dt>
                      <dd>
                        <ul className="mt-[20px]">
                          <li className="relative pl-[30px]">
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
                  <li className="relative flex flex-row-reverse mt-[40px]">
                    <dl className="relative w-[50%] pl-[70px]">
                      <dt className="text-[40px] font-bold text-primary">
                        2023
                      </dt>
                      <dd>
                        <ul className="mt-[20px]">
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
                  <li className="relative flex flex-row-reverse mt-[40px]">
                    <dl className="relative w-[50%] pl-[70px]">
                      <dt className="text-[40px] font-bold text-primary">
                        2017
                      </dt>
                      <dd>
                        <ul className="mt-[20px]">
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
                  <li className="relative flex flex-row-reverse mt-[40px]">
                    <dl className="relative w-[50%] pl-[70px]">
                      <dt className="text-[40px] font-bold text-primary">
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
