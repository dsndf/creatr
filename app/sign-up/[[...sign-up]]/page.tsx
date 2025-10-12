import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center">
      <SignUp />
    </div>
  );
};

export default Page;
