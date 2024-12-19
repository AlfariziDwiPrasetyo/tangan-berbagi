"use client";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ui/scroll-progress";
import React from "react";

function page() {
  return (
    <div className="py-32">
      <ScrollProgress className="top-[77px]" />

      <Contact />
    </div>
  );
}

export default page;
