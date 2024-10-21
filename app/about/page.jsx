"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import Link from "next/link";
import Image from "next/image";
import { ScrollAreaHorizontalDemo } from "../../components/ScrollAreaHorizontalDemo"; // 경로에 따라 맞게 변경

const About = () => {
  return (
    <section className="h-[4000px]">
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/AboutBanner.jpeg')] bg-cover bg-center">
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
                  <p className=" xl:text-[20px] text-center mt-[54px]">
                    2014년 설립된 옹달샘은
                    <br className="xl:hidden"></br> 깨끗한 식수를 필요로 하는
                    개발도상국 아동과 마을을 <br></br> 위해 식수 공급 및
                    위생교육 사업과 진행하는 <br className="xl:hidden"></br>
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
                  <li className="relative flex flex-row-reverse xl:flex-row mt-[25px] xl:mt-[40px]">
                    <div class="circle-before"></div>

                    <dl className="relative w-[100%] lg:w-[50%] pl-[44px] lg:pl-[70px] xl:pl-0 xl: pr-[70px]">
                      <dt className="text-[30px] xl:text-[40px] font-bold text-primary xl:text-right">
                        2023
                      </dt>
                      <dd>
                        <ul className="mt-[20px] ">
                          <li className="relative pl-[30px] xl:pl-0 xl:pr-[30px] xl:text-right">
                            <span className="absolute top-0 left-0 xl:left-auto xl:right-0 font-bold">
                              8
                            </span>
                            제 7회 라오스 해외봉사
                          </li>
                          <li className="relative pl-[30px] xl:pl-0 xl:pr-[30px] xl:text-right">
                            <span className="absolute top-0 left-0 font-bold xl:left-auto xl:right-0">
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
                              3
                            </span>
                            APA 선정 올해의 청소년 필란트로피스트{" "}
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <div class="circle-after"></div>
                  </li>
                  <li className="relative flex flex-row-reverse xl:flex-row mt-[25px] xl:mt-[40px]">
                    <div class="circle-before"></div>
                    <dl className="relative w-[100%] lg:w-[50%] pl-[44px] lg:pl-[70px] xl:pl-0 xl: pr-[70px]">
                      <dt className="text-[30px] xl:text-[40px] font-bold text-primary xl:text-right">
                        2014
                      </dt>
                      <dd>
                        <ul className="mt-[20px] ">
                          <li className="relative pl-[30px] xl:pl-0 xl:pr-[30px] xl:text-right">
                            <span className="absolute top-0 left-0 xl:left-auto xl:right-0 font-bold">
                              8
                            </span>
                            제 1회 베트남 해외봉사
                          </li>
                          <li className="relative pl-[30px] xl:pl-0 xl:pr-[30px] xl:text-right">
                            <span className="absolute top-0 left-0 font-bold xl:left-auto xl:right-0">
                              4
                            </span>
                            옹달샘 설립
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
                  <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-left xl:text-[16px] xl:font-normal">
                    2023년, 코로나 19 팬데믹 이후 라오스 방비엥에서 <br></br>
                    멤브레인 정수기 설치와 위생교육을 재개했습니다.<br></br>{" "}
                    옹달샘은 언제나 지속 가능한 발전을 위해 노력합니다.
                  </p>
                </div>
                <ScrollAreaHorizontalDemo></ScrollAreaHorizontalDemo>

                {/* activities */}
                <div className="mt-[80px] xl:mt-[100px]">
                  {/* Overseas Volunteering */}
                  <div className="mb-[60px] xl:mb-[80px]">
                    <h2 className="font-bold text-[24px] xl:text-[35px]">
                      필요한 곳으로 떠납니다.
                    </h2>
                    <div className="flex flex-col items-center xl:items-start">
                      <div className="xl:flex xl:flex-row-reverse w-full">
                        <div className="xl:w-[50%] relative">
                          <p className="font-light text-gray-600 text-[16px] xl:text-[18px] mt-2 xl:absolute xl:top-[-55px] xl:left-0 xl:text-left">
                            옹달샘은 베트남, 라오스 등 여러 국가에서 <br></br>
                            깨끗한 식수와 위생을 위한 봉사 활동을 진행합니다.{" "}
                            <br></br>
                            2023년에는 코로나 이후 라오스 방비엥에서 멤브레인
                            <br></br>
                            정수기 설치와 위생 교육을 재개하였습니다.
                          </p>
                        </div>

                        <div className="xl:w-[50%] xl:flex xl:items-end">
                          <Link
                            href="/activity"
                            className="text-primary font-bold my-[15px] block"
                          >
                            해외봉사 더 알아보기 →
                          </Link>
                        </div>
                      </div>
                      <div className="w-full xl:w-[1240px] h-[370px] relative xl:mt-[50px]">
                        <Image
                          src="/images/oversees-volunteer.JPEG"
                          alt="해외봉사"
                          fill
                          objectFit="cover"
                          className="mb-[20px] rounded-[20px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Technology Development and Fundraising */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {/* Technology Development */}
                    <div>
                      <h2 className="font-bold text-[20px] xl:text-[28px]">
                        기술개발
                      </h2>

                      <p className="font-light text-gray-600 text-[16px] xl:text-[18px] mt-2">
                        지속 가능한 기술 개발을 통해 현지에 적합한 <br></br>
                        멤브레인 필터 개발을 추진하고 있습니다.
                      </p>
                      <Link
                        href="/activity"
                        className="text-primary font-bold my-[15px] block"
                      >
                        기술개발 더 알아보기 →
                      </Link>
                      <div className="w-full h-[370px] relative">
                        <Image
                          src="/images/technology-development.JPEG"
                          alt="기술개발"
                          fill
                          objectFit="cover"
                          className="mb-[20px] rounded-[20px]"
                        />
                      </div>
                    </div>

                    {/* Fundraising */}
                    <div>
                      <h2 className="font-bold text-[20px] xl:text-[28px]">
                        모금사업
                      </h2>
                      <p className="font-light text-gray-600 text-[16px] xl:text-[18px] mt-2">
                        후원금 모금으로 봉사활동과 기술개발을 <br></br>
                        지속적으로 지원하고 있습니다.
                      </p>
                      <Link
                        href="/activity"
                        className="text-primary font-bold my-[15px] block"
                      >
                        모금사업 더 알아보기 →
                      </Link>
                      <div className="w-full  h-[370px] relative">
                        <Image
                          src="/images/fundraising.JPG"
                          alt="모금사업"
                          fill
                          objectFit="cover"
                          className="mb-[20px] rounded-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="values">
                <div className="w-full flex flex-col items-center">
                  <h2 className="pt-16 font-bold text-[20px] xl:text-[30px] xl:pt-10">
                    옹달샘의 정신
                  </h2>
                  <p className="text-center pt-4 pb-8 xl:text-[18px] xl:pt-4 xl:pb-10">
                    개발도상국 아이들을 위해 힘차게 달려온 10년<br></br> 더욱
                    발전하는 옹달샘이 되겠습니다
                  </p>
                  <div className="w-full flex flex-col xl:flex-row items-center gap-5 justify-center text-left text-white">
                    <div className="w-[100%] h-[200px] xl:h-[400px] xl:w-[400px] relative">
                      <div className="absolute top-0 left-0 w-full h-full z-10 p-[20px] flex flex-col justify-end ">
                        <h3 className="font-bold text-[25px] xl:text-[30px]">
                          비전
                        </h3>
                        <span className="xl:text-[18px]">
                          우리는 모든 아동이 생존, 보호, 발달 및 참여의{" "}
                          <br></br> 권리를 온전히 누리는 세상을 꿈꿉니다.
                        </span>
                      </div>
                      <Image
                        src="/images/vision.png"
                        alt={`ongdalsam vision`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-[100%] h-[200px] xl:h-[400px] xl:w-[400px] relative">
                      <div className="absolute top-0 left-0 w-full h-full z-10 p-[20px] flex flex-col justify-end">
                        <h3 className="font-bold text-[25px] xl:text-[30px]">
                          미션
                        </h3>
                        <span className="xl:text-[18px]">
                          우리는 세상이 아동을 대하는 방식에 <br></br> 획기적
                          변화를 이끌어 내고자 합니다
                        </span>
                      </div>
                      <Image
                        src="/images/mission.png"
                        alt={`ongdalsam mission`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <h2 className="pt-16 pb-8 font-bold text-[20px] xl:text-[30px] xl:pt-14 xl:pb-8">
                    옹달샘의 핵심가치
                  </h2>
                  <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-16">
                    {/* first circle */}

                    <div className="w-full h-[110px] border-2 border-gray-250 rounded-[10px] flex xl:w-[300px] xl:h-[300px] xl:rounded-[50%] relative">
                      {/* number */}

                      <div className="h-full w-[30%] flex justify-center items-center  ">
                        <span className="text-primary text-[30px] font-semibold ">
                          01
                        </span>
                      </div>

                      {/* text */}

                      <div className="h-full w-[70%] flex justify-start xl:justify-center items-center   ">
                        <h3 className="text-[16px] font-medium">
                          학생 중심의 자주적 봉사
                        </h3>
                      </div>
                    </div>

                    {/* second circle */}

                    <div className="w-full h-[110px] border-2 border-gray-250 rounded-[10px] flex xl:w-[300px] xl:h-[300px] xl:rounded-[50%]">
                      <div className="h-full w-[30%] flex justify-center items-center">
                        <span className="text-primary text-[30px] font-semibold ">
                          02
                        </span>
                      </div>

                      <div className="h-full w-[70%] flex justify-start xl:justify-center items-center ">
                        <h3 className="text-[16px] font-medium">
                          적정기술의 활용
                        </h3>
                      </div>
                    </div>
                    <div className="w-full h-[110px] border-2 border-gray-250 rounded-[10px] flex xl:w-[300px] xl:h-[300px] xl:rounded-[50%]">
                      <div className="h-full w-[30%] flex justify-center items-center">
                        <span className="text-primary text-[30px] font-semibold ">
                          03
                        </span>
                      </div>

                      <div className="h-full w-[70%] flex justify-start  xl:justify-center items-center ">
                        <h3 className="text-[16px] font-medium">
                          지역 주민들과의 심리적 유대
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="greeting">
                <div className="w-full flex flex-col-reverse xl:flex-row  pt-[20px] xl:pt-[40px] justify-between">
                  <div className="text-left mt-4 xl:w-[50%] xl:pr-8">
                    <h2 className="font-bold text-[18px] mb-8 xl:text-[25px] ">
                      신나는 옹달샘 이야기<br></br>
                      <span className="font-normal">노는게 제일 좋아요</span>
                    </h2>
                    <p className=" xl:text-[17px] text-gray-600 mb-6">
                      안녕하세요, 옹달샘 28기 장 이지아입니다.<br></br> 우리
                      옹달샘은 지난 10년 동안 지켜온 아동권리의 가치와 원칙을
                      바탕으로 더 많은 아이들을 구하기 위해 새롭게
                      도약하겠습니다. <br></br>
                      <br></br> 저희는 수많은 학생들의 자발적인 참여로 운영되는
                      동아리로서 누구나 믿고 지원할 수 있도록 투명성과 공정성을
                      유지하기 위해 최선을 다하고 있습니다. 앞으로도 모든 사업과
                      예산의 운용에 있어서 더욱 투명하고 책무성이 높아지도록
                      노력하겠습니다.<br></br>
                      <br></br> 옹달샘 수자원 문제로 위험에 노출된 아동을
                      우선순위에 두고 활동 중입니다.초등학교를 중심으로 정수기
                      보급에 앞장서는 한편, 여러 단체와의 협력을 통해 일반
                      주민들까지 사용할 수 있도록 사업을 확장해 나가겠습니다.
                      <br></br>
                      <br></br> 국제사회의 지속가능발전목표(SDGs)달성과 우리
                      정부의 외교 정책과도 발을 맞추겠습니다. 그리고, 개발도상국
                      모든 아이들의 미래를 밝히는 일에 모두가 한마음으로
                      나아가겠습니다.<br></br>
                      <br></br> 옹달샘과 함께, 세상을 변화시키는 일에 동참해
                      주고 계신 여러분 한 분 한 분에게 진심으로 감사의 마음을
                      전합니다. 우리가 아이를 구하면 아이가 세상을 구한다는
                      믿음으로, 변함없는 관심과 지원을 부탁드립니다.
                    </p>
                    <h3 className="text-gray text-[17px] xl:text-[18px]">
                      옹달샘 28기 장 <span className="font-bold">이지아</span>
                    </h3>
                  </div>
                  <div className="w-[100%] h-[405px] xl:w-[50%] xl:h-[620px]">
                    <Image
                      src="/images/Captain.jpeg"
                      alt="ongdalsam captain"
                      width={335}
                      height={335}
                      className="object-cover h-[100%] w-[100%] rounded-[3%] xl:rounded-[50%]"
                    ></Image>
                  </div>
                </div>
                <div className="w-full flex flex-col-reverse xl:flex-row-reverse  pt-6 justify-between">
                  <div className="text-right mt-4 xl:w-[50%] xl:pl-8">
                    <h2 className="font-bold text-[18px] mb-8 xl:text-[25px]">
                      신나는 옹달샘 이야기<br></br>
                      <span className="font-normal">노는게 제일 좋아요</span>
                    </h2>
                    <p className=" xl:text-[17px] text-gray-600 mb-6">
                      안녕하세요, 옹달샘 28기 차장 추연수입니다.<br></br> 우리
                      옹달샘은 지난 10년 동안 지켜온 아동권리의 가치와 원칙을
                      바탕으로 더 많은 아이들을 구하기 위해 새롭게
                      도약하겠습니다. <br></br>
                      <br></br> 저희는 수많은 학생들의 자발적인 참여로 운영되는
                      동아리로서 누구나 믿고 지원할 수 있도록 투명성과 공정성을
                      유지하기 위해 최선을 다하고 있습니다. 앞으로도 모든 사업과
                      예산의 운용에 있어서 더욱 투명하고 책무성이 높아지도록
                      노력하겠습니다.<br></br>
                      <br></br> 옹달샘 수자원 문제로 위험에 노출된 아동을
                      우선순위에 두고 활동 중입니다.초등학교를 중심으로 정수기
                      보급에 앞장서는 한편, 여러 단체와의 협력을 통해 일반
                      주민들까지 사용할 수 있도록 사업을 확장해 나가겠습니다.
                      <br></br>
                      <br></br> 국제사회의 지속가능발전목표(SDGs)달성과 우리
                      정부의 외교 정책과도 발을 맞추겠습니다. 그리고, 개발도상국
                      모든 아이들의 미래를 밝히는 일에 모두가 한마음으로
                      나아가겠습니다.<br></br>
                      <br></br> 옹달샘과 함께, 세상을 변화시키는 일에 동참해
                      주고 계신 여러분 한 분 한 분에게 진심으로 감사의 마음을
                      전합니다. 우리가 아이를 구하면 아이가 세상을 구한다는
                      믿음으로, 변함없는 관심과 지원을 부탁드립니다.
                    </p>
                    <h3 className="text-gray text-[17px] xl:text-[18px]">
                      옹달샘 28기 차장 <span className="font-bold">추연수</span>
                    </h3>
                  </div>
                  <div className="w-[100%] h-[405px] xl:w-[50%] xl:h-[620px]">
                    <Image
                      src="/images/Vice-Captain.jpg"
                      alt="ongdalsam vice captain"
                      width={335}
                      height={335}
                      className="object-cover h-[100%] w-[100%] rounded-[3%] xl:rounded-[50%]"
                    ></Image>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
