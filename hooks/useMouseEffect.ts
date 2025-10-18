import { MouseEvent, useEffect, useState } from "react";

type MouseState = {
  x: number;
  y: number;
};
export default function useMouseEffect() {
  const [state, setState] = useState<MouseState>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMoveEvent = (e: globalThis.MouseEvent) => {
      setState((prev) => ({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", handleMouseMoveEvent);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveEvent);
    };
  });
  return state;
}
