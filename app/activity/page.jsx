"use client";

import Image from "next/image";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const Activity = () => {
  return (
    <section className="h-[10000px]">
      <div className="h-[400px] xl:h-[315px] bg-[url('/images/ActivityBanner.jpg')] bg-cover bg-center"></div>
      <div className="min-h-[80vh] flex items-center justify-center relative">
        <div className="container mx-auto absolute top-[-25px]">
          <Tabs
            defaultValue="volunteering"
            className="w-full flex flex-col items-center"
          >
            <TabsList>
              <TabsTrigger value="volunteering">해외봉사</TabsTrigger>
              <TabsTrigger value="technology">기술개발</TabsTrigger>
              <TabsTrigger value="fundraising">모금사업</TabsTrigger>
            </TabsList>

            {/* Contents */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="volunteering"></TabsContent>

              <TabsContent value="technology">b</TabsContent>

              <TabsContent value="fundraising">c</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Activity;
