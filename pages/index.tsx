import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";
import { Event } from "firebase-functions";

const Home: NextPage = () => {
  let box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // INIT ANIMATION
    let baseComponent = gsap.utils.selector("#baseComponent");
    gsap.to(baseComponent, {
      delay: 0,
      duration: 0,
      css: { visibility: "visible" },
    });

    // GREEN BOX ANIMATIONS
    gsap.to(box.current, {
      rotate: () => 360,
      repeat: 0,
      duration: 1,
    });

    // SECTION SCROLL ANIMATION
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".container",
    });
  }, []);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { backgroundColor: "#e77614" });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { backgroundColor: "#28a92b" });
  };

  return (
    <main className="">
      <Head>
        <title>Experimenting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-52 h-52 bg-[#28a92b]"
        ref={box}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      ></div>
    </main>
  );
};

export default Home;
