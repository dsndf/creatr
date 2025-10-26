"use client";
import { DashboardOption } from "@/app";
import {
  FileTextIcon,
  LayoutDashboardIcon,
  PenToolIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DashboardSidebar = () => {
  const options: DashboardOption[] = [
    { name: "Dashboard", icon: LayoutDashboardIcon, link: "/dashboard" },
    { name: "Create Post", icon: PenToolIcon, link: "/dashboard/create" },
    { name: "My Posts", icon: FileTextIcon, link: "/dashboard/my-posts" },
    { name: "Followers", icon: UsersIcon, link: "/dashboard/followers" },
  ];

  const path = usePathname();

  return (
    <div className="fixed left-0 bottom-0 top-0 bg-slate-800/50 w-1/6 ">
      <div className="py-6 px-6 border-b border-slate-700">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
      </div>
      <nav className="flex flex-col justify-start items-start space-y-1 p-3 mt-2">
        {options &&
          options.map((option, index) => {
            return (
              <Link href={option.link} className="w-full" key={index}>
                <div
                  className={cn(
                    "transition-all duration-200 font-medium p-4 space-y-4 w-full rounded-2xl hover:bg-slate-700/50 flex justify-start items-center",
                    path === option.link &&
                      "bg-gradient-to-r from-purple-700/50 to-blue-900/50 border border-purple-500/30 text-white"
                  )}
                >
                  <option.icon className="w-5 h-5 mr-2.5" />
                  {option.name}
                </div>
              </Link>
            );
          })}
      </nav>

      <div className="absolute bottom-0 w-full p-6">
        <Link href={"/dashboard/settings"} className="w-full">
          <Button variant={"outline"} className="w-full justify-start rounded-full" >
            <SettingsIcon className="w-4 h-4" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
