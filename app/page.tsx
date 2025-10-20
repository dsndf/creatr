"use client";
import MouseEffectBg from "@/components/common/MouseEffectBg";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import React, { act, useState } from "react";
import { features, platformTabs, socialProofStats } from "@/lib/data";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { platform } from "os";
import { cn } from "@/lib/utils";

const Home = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
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

      {/* How it works */}
      <section className="mt-16 py-16  z-10 relative">
        <div className="text-center space-y-4 py-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="gradient-text-primary">How it works</span>
          </h2>
          <p className="text-lg sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Three powerful modules working together to supercharge your content
            creation.
          </p>
        </div>

        <div className="flex items-start max-w-7xl gap-8 mx-auto mt-16">
          {/* Tabs */}
          <div className="space-y-4 w-1/3">
            {platformTabs &&
              platformTabs.map((tab, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className="justify-start h-auto  p-6 w-full"
                    variant={activeTab == index ? "outline" : "ghost"}
                  >
                    <div
                      className={cn(
                        "p-4 rounded-xl",
                        activeTab == index &&
                          "bg-gradient-to-br from-purple-500 to-blue-500"
                      )}
                    >
                      {" "}
                      <tab.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-2 text-lg font-bold">{tab.title}</div>
                  </Button>
                );
              })}
          </div>
          <div className="w-2/3">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {platformTabs[activeTab].title}
                </CardTitle>
                <CardDescription className="text-md text-muted-foreground">
                  {platformTabs[activeTab].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 grid-rows-2 gap-4">
                {platformTabs[activeTab].features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-start items-center gap-3"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />{" "}
                      <h4 className="text-gray-300">{feature}</h4>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-16">
            <span className="gradient-text-primary">
              Loved by creators worldwide
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {socialProofStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 gradient-text-accent">
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-base sm:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-16">
            <span className="gradient-text-primary">Testimonials</span>
          </h2>
        </div>
      </section>

      {/* Ready to create */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-16">
            <span className="gradient-text-primary">Ready to create?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already building their audience
            and growing their business with our AI-powered platform.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button variant={"primary"} size={"xl"} className="rounded-full">
              Start Your Journey <ArrowRightIcon />
            </Button>
            <Button variant={"outline"} size={"xl"} className="rounded-full">
              Explore the Feed
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 border-t py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Made with ❤️ by{" "}
            <span className="text-foreground font-semibold">GauravJain</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
