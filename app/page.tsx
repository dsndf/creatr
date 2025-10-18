import MouseEffectBg from "@/components/common/MouseEffectBg";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { features } from "@/lib/data";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <MouseEffectBg />
      {/* Hero */}
      <section className=" border-white pt-48 z-10">
        <div className="grid grid-cols-2 max-w-7xl gap-12 mx-auto items-center">
          <div className="text-left  space-y-6 ">
            <div className="space-y-4">
              <h1 className="text-8xl font-extrabold">Create.</h1>
              <h1 className="text-8xl font-light italic text-purple-300">
                Publish.
              </h1>
              <h1 className="text-8xl font-extrabold bg-gradient-to-bl from-blue-600 text-transparent to-purple-300 bg-clip-text ">
                Grow.
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl md:max-w-none">
              The AI-powered platform that turns your ideas into{" "}
              <span className="text-purple-300 font-semibold">
                engaging content
              </span>{" "}
              and helps you build a thriving creator business.
            </p>
            <div className="flex justify-start items-center gap-4">
              <Button variant={"primary"} size={"xl"} className="rounded-full">
                Start Creating for Free <ArrowRightIcon className="" />
              </Button>
              <Button variant={"outline"} className="rounded-full" size={"xl"}>
                Explore Feed
              </Button>
            </div>
          </div>
          <div className=" ">
            <Image
              src={"/banner.png"}
              width={500}
              height={700}
              className="w-full h-auto object-contain"
              alt="app-banner"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 py-16 bg-gradient-to-r from-gray-900/50 to-purple-900/20 z-10 relative">
        <div className="text-center space-y-4 py-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="gradient-text-primary">Everything you need</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            From AI-powered writing assistance to advanced analytics, we&apos;ve
            built the complete toolkit for modern creators.
          </p>
        </div>
        
        <div className="grid grid-cols-3  gap-8 max-w-7xl mx-auto mt-16">
          {features &&
            features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:scale-105 card-glass"
                >
                  <CardContent>
                    <div
                      className={`border w-fit h-fit p-4 rounded-2xl bg-gradient-to-br ${feature.color} transition-transform duration-700 group-hover:scale-110`}
                    >
                      <feature.icon className=" rounded-2xl w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mt-6 text-xl">
                      {feature.title}
                    </CardTitle>
                    <p className="text-sm mt-4 text-muted-foreground ">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Home;
