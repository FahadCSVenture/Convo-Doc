import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/button";

const CallToAction: FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]  ">
      <div className="max-w">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-heading ">
            Get started for free today
          </h2>
          <p className="text-center text-[20px] tracking-tight text-[#010D3E] mt-5">
          Celebrate the productive day with an app designed to chat with your PDF document to your progress and motivate your efforts.
          </p>
          <div className="flex justify-center">
          <Link href={"/sign-up"} className={cn(buttonVariants(),"mt-7")}>
            Get Started. it&apos;s free
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
