"use client";
import { UserButton } from "@clerk/nextjs";
import { Authenticated } from "convex/react";
import React from "react";

const DashboardHeader = () => {
  return (
    <header className="border-b  border-slate-700 px-6 flex justify-end items-center h-20  bg-slate-800/30">
      <aside className="ml-auto  w-fit">
        {" "}
        <Authenticated>
          <UserButton></UserButton>
        </Authenticated>
      </aside>
    </header>
  );
};

export default DashboardHeader;
