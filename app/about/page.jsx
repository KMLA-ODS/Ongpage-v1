"use client";

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
              <TabsContent value="organization">a</TabsContent>
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
