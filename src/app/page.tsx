"use client"
import Hero from "@/components/hero"
import "../style/mainStyle.css";

import React from "react";
import Divider from "@/components/divider";
import MidTable from "@/components/midTable";
import BigDiv from "@/components/bigDiv";
import LastHero from "@/components/lastHero";
import LastDiv from "@/components/lastDiv";
import Image from "next/image";

export default function Landing() {


  return (
    <div id="head"  className="all ">
      <div className="land">
      
        <Image width={1728} height={1728} className="blur1 z-50" src="/blur.png" alt="blur"/>
        <Image width={1728} height={1728} className="blur2 z-0" src="/blur.png" alt="blur"/>
        <Image width={1728} height={1728} className="blur3 -z-10" src="/blur.png" alt="blur"/>
          {/* <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute right-0 top-1/2 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 z-50 "
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                  </defs>
                  </svg> */}
        
                  
        <Image width={715} height={666.666} className="group1 z-0" src="/design1.png" alt="pic" />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="divider z-10 w-full relative">
        <Image fill src="/vector11.png" alt="vec" className="mt-32 z-40" />
        <div>
        <Divider/>
        </div>
        <Image fill src="/vector12.png" alt="vec" className="z-40" />
      </div>
      <div className="mid-table z-10 relative">
        <MidTable />
      </div>
      <div id="about" className="big-divider w-full">
      <Image fill src="/vector8.png" alt="vector8" className="big-img2"/>
      <div><BigDiv/></div>
      <Image fill src="/vector9.png" alt="vector9" className="big-img2"/>  
      </div>
      <div className="last-hero">
        <LastHero/>
      </div>
      <div  className="last-divider w-full">
      <Image fill src="/vector13.png" alt="vector13" className="last-img2"/>
      <div><LastDiv/></div>
      <Image fill  src="/vector14.png" alt="vector14" className="last-last-div"/>  
      </div>
    </div>
    
    
  );
}
