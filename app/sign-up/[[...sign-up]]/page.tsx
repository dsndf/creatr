import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center mt-48">
      <SignUp />
    </div>
  );
};

export default Page;
