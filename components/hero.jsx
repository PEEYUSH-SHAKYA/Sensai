"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 bg-white">
  <div className="space-y-6 text-center">
    <div className="space-y-6 mx-auto">
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight tracking-tight">
        Your AI Career Coach for
        <br />
        <span className="text-gray-700">Professional Success</span>
      </h1>

      <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
        Advance your career with personalized guidance, interview prep, and
        AI-powered tools for job success.
      </p>
    </div>
    <div className="flex justify-center space-x-4">
      <Link href="/dashboard">
        <Button size="lg" className="px-8 bg-gray-900 hover:bg-gray-800 text-white">
          Get Started
        </Button>
      </Link>
      <Link href="#">
        <Button size="lg" variant="outline" className="px-8 border-gray-400 text-gray-700 hover:bg-gray-200">
          Watch Demo
        </Button>
      </Link>
    </div>
    <div className="hero-image-wrapper mt-5 md:mt-0">
      <div ref={imageRef} className="hero-image">
        <Image
          src="/banner2.jpeg"
          width={1280}
          height={720}
          alt="Dashboard Preview"
          className="rounded-lg shadow-md border border-gray-300 mx-auto"
          priority
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
