"use client";
import useMouseEffect from "@/hooks/useMouseEffect";
import React from "react";

const MouseEffectBg = () => {
  const mouseState = useMouseEffect();
  return (
    <>
      {" "}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse"></div>
      <div
        style={{
          left: mouseState.x - 192,
          top: mouseState.y - 192,
        }}
        className="fixed transition-all pointer-events-none ease-out duration-75 w-98 h-98 bg-gradient-to-br from-blue-500/20 z-0 to-purple-500/20 blur-3xl rounded-full "
      ></div>
    </>
  );
};

export default MouseEffectBg;
