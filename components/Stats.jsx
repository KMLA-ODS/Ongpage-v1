"use client";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import Image from "next/image";

const stats = [
  {
    num: 10,
    text: "옹달샘이 걸어온 헌신의 시간",
    unit: "년",
    image: "/images/number1.webp",
  },
  {
    num: 146,
    text: "매년 옹달샘과 함께한 시간",
    unit: "시간",
    image: "/images/number2.jpg",
  },
  {
    num: 400,
    text: "옹달샘이 지원한 아이들의 수",
    unit: "+명",
    image: "/images/number3.webp",
  },
  {
    num: 45,
    text: "옹달샘을 거쳐간 졸업생 수",
    unit: "명",
    image: "/images/number4.webp",
  },
];

const getThreshold = () => {
  if (window.innerWidth < 768) {
    // 모바일 화면 기준, 768px 이하일 때
    return 0.2;
  } else {
    // 데스크톱 화면 기준
    return 0.8;
  }
};

const Stats = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // 한 번 실행되면 더 이상 감지하지 않음
        }
      },
      { threshold: getThreshold() }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="flex flex-col xl:flex-row justify-around items-start gap-6 mx-auto xl:max-w-none mt-8">
        {stats.map((item, index) => {
          return (
            <div className="flex gap-4 xl:flex-col xl:text-center" key={index}>
              <div className="h-[120px] w-[120px] xl:h-[240px] xl:w-[240px]">
                <Image
                  src={item.image}
                  alt="ongdalsam numbers"
                  width={335}
                  height={335}
                  className="object-cover h-[100%] w-[100%] rounded-[50%]"
                ></Image>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div>
                  {startCount ? (
                    <CountUp
                      end={item.num}
                      duration={5}
                      className="text-2xl xl:text-4xl font-bold"
                    />
                  ) : null}
                  <span className="text-xl xl:text-3xl font-medium text-gray-900">
                    {item.unit}
                  </span>
                </div>
                <p className=" text-[15px] xs:text-[16px] xl:text-[18px] font-light">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
