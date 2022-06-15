import React from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import { useEffect, useRef } from "react";

type Props = {};

const scroll = (props: Props) => {
  let scrollerSection = useRef<HTMLDivElement>(null);
  let nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // INIT ANIMATION
    let baseComponent = gsap.utils.selector("#baseComponent");
    gsap.to(baseComponent, {
      delay: 0,
      duration: 0,
      css: { visibility: "visible" },
    });

    // SECTION SCROLL ANIMATION

    gsap.registerPlugin(ScrollTrigger);

    // gsap.set(".massiveImage", {
    //   backgroundImage: `url(https://source.unsplash.com/random/${
    //     innerWidth * 3
    //   }x${innerHeight})`,
    // });

    gsap.to("#scrollerSection", {
      xPercent: -100,
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        end: () => {
          let endValue = innerWidth * 6;
          return endValue;
        },
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
    console.log(window.innerWidth - (window.innerWidth - 1280) / 2);
    gsap.to("#nav", {
      x: window.innerWidth - (window.innerWidth - 1280),
      y: window.innerHeight - 120,
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        end: () => {
          let endValue = innerWidth * 6;
          return endValue;
        },
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <main className="font-manrope relative bg-white">
      {/* <div className="flex justify-center items-center fixed h-screen w-full invert  z-50"></div> */}
      <div className="font-semibold max-w-7xl mx-auto sticky top-10 left-0 z-50 !mix-blend-difference">
        <div
          ref={nav}
          id="nav"
          className="font-semibold w-fit text-2xl select-none text-white !mix-blend-difference"
        >
          Привет!
        </div>
      </div>

      <div className="bg-white w-full h-[100vh] flex justify-center items-center">
        <h1 className="text-4xl text-center font-semibold">
          Just try scrolling on this page!
        </h1>
      </div>

      <div className="" id="wrapper">
        <div
          className="flex min-w-min"
          id="scrollerSection"
          ref={scrollerSection}
        >
          <div className="bg-red-400 w-[100vw] h-[100vh]"></div>
          <div className="bg-orange-400 w-[100vw] h-[100vh]"></div>
          <div className="bg-yellow-400 w-[100vw] h-[100vh]"></div>
          <div className="bg-green-400 w-[100vw] h-[100vh]"></div>
          <div className="bg-blue-400 w-[100vw] h-[100vh]"></div>
          <div className="bg-purple-400 w-[100vw] h-[100vh]"></div>
        </div>
      </div>

      <div className="bg-white w-full h-[100vh] flex justify-center items-center">
        <h2 className="text-4xl text-center font-semibold">
          And now it scrolls as usual!
        </h2>
      </div>
    </main>
  );
};

export default scroll;