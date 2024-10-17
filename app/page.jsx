// components
import Stats from "../components/Stats";
import Button from "../components/ui/button";

const Home = () => {
  return (
    <section className="h-[10000px]">
      <div className="h-[400px] xl:h-[719px] bg-[url('/images/Home_bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto h-full">
          <div className="pt-[80px] xl:pt-[246px]">
            <span className="text-white xl:mb-[29px] font-semibold">2024</span>
            <h1 className="text-white font-bold text-4xl xl:text-[65px] xl:mb-[22px] xl:leading-tight  ">
              민족사관고등학교 <br></br> 옹달샘
            </h1>
            <p className="text-white xl:text-[20px]">
              국내 유일 적정기술 해외봉사 동아리
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-[719px]">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div>text</div>
          <div>photo</div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
};

export default Home;
