"use client";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

const Slider: FC = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w">
        <div className="flex max-w-[968px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex  gap-16 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={"/images/slider/acme-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/apex-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/celestia-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/echo-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/pulse-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/quantum-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />

            {/* Second seet of logos for animation */}
            <Image
              src={"/images/slider/acme-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/apex-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/celestia-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/echo-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/pulse-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
            <Image
              src={"/images/slider/quantum-logo.png"}
              alt="Acme Logo"
              width={147}
              height={32}
              className="logo-slider-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
