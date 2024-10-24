"use client";
import { testimonialType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";

const Testimonials: FC = () => {
  const testimonials: testimonialType[] = [
    {
      text: "Our tream's productivity has skyrocketed since we started using convo doc.",
      imageSrc: "/images/testimonials/avatar1.png",
      name: "Casey Jordan",
      username: "@caseyj",
    },
    {
      text: "This app has completely transformed how i manage my projects and deadlines.",
      imageSrc: "/images/testimonials/avatar2.png",
      name: "Morgan Lee",
      username: "@morganlee",
    },
    {
      text: "The chatting capabilities of this app are top-notch.",
      imageSrc: "/images/testimonials/avatar3.png",
      name: "Riley Smith",
      username: "@rileysmith1",
    },
    {
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      imageSrc: "/images/testimonials/avatar4.png",
      name: "Taylor Kim",
      username: "@taylorkimm",
    },
    {
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: "/images/testimonials/avatar5.png",
      name: "Casey Harper",
      username: "@casey9",
    },
    {
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      imageSrc: "/images/testimonials/avatar6.png",
      name: "Sam Dawson",
      username: "@samdawson",
    },
    {
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      imageSrc: "/images/testimonials/avatar7.png",
      name: "Jordan Patels",
      username: "@jpatels",
    },
    {
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      imageSrc: "/images/testimonials/avatar8.png",
      name: "Josh Smith",
      username: "@jsmith",
    },
    {
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      imageSrc: "/images/testimonials/avatar9.png",
      name: "Alex Rivera",
      username: "@alexrivera",
    },
  ];

  const firstColumn: testimonialType[] = testimonials.slice(0, 3);
  const secondColumn: testimonialType[] = testimonials.slice(3, 6);
  const thirdColumn: testimonialType[] = testimonials.slice(6, 9);

  const TestimonialsColumn = (props: {
    testimonialsData: testimonialType[];
    className?: string;
    duration:number
  }) => (
    <div className={props.className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          duration:props.duration || 10,
          repeat:Infinity,
          ease:"linear",
          repeatType:"loop",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonialsData.map((testimonial) => (
              <div className="card" key={testimonial.username}>
                <div className="">{testimonial?.text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={testimonial?.imageSrc}
                    alt={testimonial?.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="">
                    <p className="font-medium tracking-tight leading-5">
                      {testimonial?.name}
                    </p>
                    <p className="leading-5 tracking-tight">
                      {testimonial?.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-12 lg:py-20 bg-white ">
      <div className="max-w">
        <h2 className="section-heading mt-5">What our users say</h2>
        <div className="flex justify-center gap-6 mt-10 max-h-[768px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonialsData={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonialsData={secondColumn}
            className="hidden lg:block"
            duration={20}
          />
          <TestimonialsColumn
            testimonialsData={thirdColumn}
            className="hidden xl:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
