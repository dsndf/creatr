"use client";
import { useStoreUser } from "@/hooks/useStoreUserEffect";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import React from "react";
import { BarLoader } from "react-spinners";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboardIcon } from "lucide-react";

const Header = () => {
  const { isAuthenticated, isLoading } = useStoreUser();
  const path = usePathname();

  if (path.startsWith("/dashboard")) return null;

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10", // Custom width and height using Tailwind CSS classes
      // You can also customize other elements here, e.g.,
      // userButtonPopoverCard: "bg-blue-100",
      // userButtonPopoverActionButton: "text-red-600",
    },
  };
  return (
    <header className="flex justify-center  items-center gap-4 fixed left-0 right-0 top-12 z-50 ">
      <div className="border backdrop-blur-md overflow-hidden  h-18 rounded-full w-1/2 flex justify-between items-center px-4  bg-white/10 relative">
        <div className="pl-4">
          <Image src={"/logo.png"} width={100} height={10} alt="app-logo" />
        </div>
        <div>
          {path === "/" && (
            <div className="flex justify-center items-center gap-4">
              {" "}
              <Link href={"#features"}>
                <Button variant={"link"} className="text-lg">
                  Features
                </Button>
              </Link>
              <Link href={"#testimonials"}>
                <Button variant={"link"} className="text-lg">
                  Testimonials
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-4 items-center px-4">
          <Authenticated>
            <Link href={"/dashboard"}>
              {" "}
              <Button variant={"outline"}>
                <LayoutDashboardIcon />
                Dashboard
              </Button>
            </Link>

            <UserButton />
          </Authenticated>
          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"}>Sign in</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant={"primary"}>Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {isLoading && <BarLoader color="#D8B4FE" width={"95%"} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
