import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

const HeroSecton: FC = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-5 lg:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#2563EB,#eaeefe_66%)]">
      <div className="max-w flex flex-col lg:flex-row lg:gap-4 2xl:gap-8 justify-center">
        <div className="lg:w-lg  lg:my-auto ">
          <div className="pill text-sm inline-flex border border-border px-3 py-1 rounded-full tracking-tight bg-white ">
            Convo Doc is Live!
          </div>
          <h1 className="text-5xl 2xl:text-6xl font-bold tracking-tighter  mt-6">Chat with your  <br className="hidden lg:block"/> <span className="text-[#2563EB]"> Documents </span> in seconds.</h1>
          <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Convo Doc allows you to have chat with any PDF document. Simply
            upload your file and start asking questions right away.
          </p>
          <Link href={"/sign-up"} className={cn(buttonVariants(),"mt-7")}>
            Get Started. it's free
          </Link>
        </div>
        <div className="mt-14  lg:Hero-image-skew lg:mt-0 flex items-center lg:flex-grow justify-center">
          <Image src={"/images/hero-image.webp"} alt="Convo Doc Hero Image" width={968} height={645} />
        </div>
      </div>
    </section>
  );
};

export default HeroSecton;
