"use client";

import Image from "next/image";

const Donation = () => {
  return (
    <section className="mb-24">
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/donationBanner.jpeg')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">후원안내</h2>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full mt-[80px] xl:mt-[100px]">
          {/* 소개 */}

          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[30px] xl:font-semibold mb-10">
            여러분의 후원은 개발도상국 아이들에게 <br></br> 깨끗한{" "}
            <span className="text-primary font-bold">물과 희망을 </span>
            선물합니다{" "}
          </h2>

          {/* 후원 */}

          <div className="flex flex-row flex-wrap gap-3 md:gap-5 xl:gap-[46px] justify-between xl:justify-center">
            <div className="w-[48%] h-[220px] sm:w-[36%] md:h-[280px] xl:h-[300px] xl:w-[300px] relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNfm5kMxWcY8FXYsV-nfKW6LGUFZ8ZA4PKI4962aFyjqqWag/viewform">
                <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                  <h2 className=" z-20 font-bold text-[18px] text-white">
                    일시후원
                  </h2>
                </div>
              </a>
              <Image
                src="/images/donation1.jpeg"
                alt={`donation 1`}
                layout="fill" // 부모 요소 크기 맞춤
                objectFit="cover" // 이미지가 부모 요소에 꽉 차도록
              />
            </div>
            <div className="w-[48%] h-[220px] md:h-[280px] sm:w-[61%] xl:h-[300px] xl:w-[300px] relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNfm5kMxWcY8FXYsV-nfKW6LGUFZ8ZA4PKI4962aFyjqqWag/viewform">
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                  <h2 className=" z-20 font-bold text-[18px] text-white">
                    정기후원
                  </h2>
                </div>{" "}
              </a>
              <Image
                src="/images/donation2.jpeg"
                alt={`donation 2`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-[100%] h-[220px] md:h-[280px] xl:max-w-[300px] xl:h-[300px] xl:w-[300px] relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNfm5kMxWcY8FXYsV-nfKW6LGUFZ8ZA4PKI4962aFyjqqWag/viewform">
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 hover:bg-opacity-40 z-10 flex justify-center items-center">
                  <h2 className=" z-20 font-bold text-[18px] text-white">
                    물품지원
                  </h2>
                </div>{" "}
              </a>
              <Image
                src="/images/donation3.jpg"
                alt={`donation 3`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <h3 className="mt-6 xl:ml-[125px]">
            후원금 전액은 개발도상국 아이들을 위한{" "}
            <br className="sm:hidden"></br> 위생용품 지원과 가람정수기 보급에
            사용됩니다.<br></br> 자세한 사용처는 정기 소식지로 확인하실 수
            있습니다.
          </h3>

          {/* 웰컴*/}

          <h2 className="font-bold text-[20px] xl:text-[30px] text-center mt-20 mb-8">
            후원자가 되어주시면
          </h2>

          <div className="flex flex-col xl:flex-row gap-5 xl:gap-[46px] items-center justify-center">
            <div className="flex flex-col items-center w-[220px] mb-2">
              <div className="w-[150px] h-[150px] rounded-[50%] bg-[#D9D9D9] bg-opacity-[69] flex justify-center items-center ">
                <Image
                  src="/images/gift.svg"
                  alt={`gift`}
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[18px] my-4">웰컴 패키지</h3>
                <p className="text-[#828282]">
                  감사의 마음을 담아<br></br> 옹달샘 웰컴패키지를 보내<br></br>
                  드립니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-[220px] mb-2">
              <div className="w-[150px] h-[150px] rounded-[50%] bg-[#D9D9D9] bg-opacity-[69] flex justify-center items-center ">
                <Image
                  src="/images/stage.svg"
                  alt={`stage`}
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[18px] my-4">결과보고회 초청</h3>
                <p className="text-[#828282]">
                  매년 진행하는<br></br>결과보고회 참석 기회를<br></br>
                  제공해드립니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-[220px] mb-2">
              <div className="w-[150px] h-[150px] rounded-[50%] bg-[#D9D9D9] bg-opacity-[69] flex justify-center items-center ">
                <Image
                  src="/images/mail.svg"
                  alt={`mail`}
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[18px] my-4">정기 소식지</h3>
                <p className="text-[#828282]">
                  분기별 옹달샘 활동에 대한<br></br>소식지와 해외봉사
                  결과보고서를<br></br> 보내드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
