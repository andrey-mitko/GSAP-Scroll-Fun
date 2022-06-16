import React, { useState } from "react";
import type { NextPage } from "next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import useLocoScroll from "../hooks/useLocoScroll";

type Props = {};

const Home: NextPage = (props: Props) => {
  let scrollerSection = useRef<HTMLDivElement>(null);

  let nav = useRef<HTMLDivElement>(null);
  useLocoScroll();

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

    gsap.to("#scrollerSection", {
      xPercent: -100,
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "#wrapper",
        scroller: "#main-container",
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

    const xTranslate =
      window.innerWidth > 1280
        ? window.innerWidth - (window.innerWidth - 1280)
        : window.innerWidth - 28 * 2;
    gsap.to("#nav", {
      x: xTranslate - nav.current!.offsetWidth,
      y: window.innerHeight - 120,
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        scroller: "#main-container",
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

    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="font-manrope relative bg-white overflow-x-hidden">
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#main-container"
        className="font-semibold px-7 xl:px-0 max-w-7xl mx-auto sticky top-10 left-0 z-50 !mix-blend-difference"
      >
        <div
          ref={nav}
          id="nav"
          className="font-semibold w-fit text-xl lg:text-2xl fixed select-none text-white !mix-blend-difference"
        >
          Привет!
        </div>
      </div>

      <div className="bg-white w-full h-[100vh] flex justify-center items-center">
        <h1
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.2"
          className="text-2xl lg:text-4xl text-center font-semibold"
        >
          Just try scrolling on this page!
        </h1>
      </div>

      <div className="" id="wrapper">
        <div
          className="flex min-w-min font-manrope"
          id="scrollerSection"
          ref={scrollerSection}
        >
          <div className="bg-red-400 w-[100vw] h-[100vh] flex justify-center items-center">
            <span className="uppercase text-5xl lg:text-9xl font-black text-red-900 ">
              Red
            </span>
          </div>
          <div className="bg-orange-400 w-[100vw] h-[100vh]  flex justify-center items-center">
            <span className="uppercase text-5xl lg:text-9xl font-black text-orange-900 ">
              Orange
            </span>
          </div>
          <div className="bg-yellow-400 w-[100vw] h-[100vh]  flex justify-center items-center">
            <span className="uppercase text-5xl lg:text-9xl font-black text-yellow-900 ">
              Yellow
            </span>
          </div>
          <div className="bg-green-400 w-[100vw] h-[100vh]  flex justify-center items-center">
            <span className="uppercase text-5xl lg:text-9xl font-black text-green-900 ">
              Green
            </span>
          </div>
          <div className="bg-blue-400 w-[100vw] h-[100vh]  flex justify-center items-center">
            <span className="uppercase text-5xl lg:text-9xl font-black text-blue-900 ">
              Blue
            </span>
          </div>
          <div className="bg-purple-400 w-[100vw] h-[100vh]  flex justify-center items-center">
            <span className="uppercase text-5xl lg:text-9xl font-black text-purple-900 ">
              Purple
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-[100vh] flex justify-center items-center">
        <h2
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.2"
          className="text-2xl lg:text-4xl text-center font-semibold"
        >
          And now it scrolls as usual!
        </h2>
      </div>
    </main>
  );
};

export default Home;
