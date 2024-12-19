"use client";
import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import GradualSpacing from "./ui/gradual-spacing";
import ScrollProgress from "./ui/scroll-progress";

function Header() {
  const words =
    "Tangan Berbagi adalah organisasi sosial yang berfokus pada kegiatan kemanusiaan, sosial, pendidikan, dan lingkungan. Organisasi ini bertujuan untuk meringankan penderitaan masyarakat yang membutuhkan serta meningkatkan kualitas hidup melalui berbagai program kerja";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-32 px-12 md:py-0 md:px-12">
      <ScrollProgress className="top-[77px]" />
      <div className="flex flex-col justify-center">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest  text-green-600 dark:text-white md:text-7xl md:leading-[5rem]"
          text="Tangan Berbagi."
        />
        <TextGenerateEffect duration={2} filter={false} words={words} />
      </div>
      <div>
        <Image src="/images/logo.png" width={1500} height={1500} alt="header" />
      </div>
    </div>
  );
}

export default Header;
