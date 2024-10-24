import Image from "next/image";
import { FC } from "react";

const ProductShowcase: FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]  ">
      <div className="max-w">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="pilltext-sm  inline-flex border border-border px-3 py-1 rounded-full tracking-tight bg-white">
              Boost your Productivity
            </div>
          </div>
          <h2 className="section-heading mt-5">
            Start Chatting in Minutes
          </h2>
          <p className="text-center text-[20px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly read you PDF documents and make your workflow even more
            productive. Chatting to your PDF files has never been easier than
            with Convo Doc.
          </p>
        </div>
        <Image
          src={"/images/hero-image.webp"}
          alt="Product Showcase Image"
          width={968}
          height={645}
          className="mt-10 mx-auto"
        />
        <div className="mb-10 mt-20 max-w-[968px] mx-auto space-y-12 md:grid md:grid-cols-2 md:space-y-0  lg:grid lg:grid-cols-3 md:gap-5">
            <div className="step max-w-[400px]">
                <h3 className="subheading text-[16px] text-[#2563EB]  mb-3 ">Step 1</h3>
                <h2 className="subheading font-bold text-[18px]">Sign up for an account</h2>
                <p className="text-[16px] font-medium mt-1">Start out with Convo Doc and get our free plan or choose our pro plan.</p>
            </div>
            <div className="step max-w-[400px]">
                <h3 className="subheading text-[16px] text-[#2563EB]  mb-3 ">Step 2</h3>
                <h2 className="subheading font-bold text-[18px]">Uploadyour PDF file</h2>
                <p className="text-[16px] font-medium mt-1">We&apos;ll process your file and make it available for you to chat with.</p>
            </div>
            <div className="step max-w-[400px] md:pt-12 lg:pt-0">
                <h3 className="subheading text-[16px] text-[#2563EB]  mb-3 ">Step 3</h3>
                <h2 className="subheading font-bold text-[18px]">Start asling questions</h2>
                <p className="text-[16px] font-medium mt-1">It&apos;s that simple. Tryout Convo Doc today - it is fast and efficient.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
