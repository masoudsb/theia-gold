"use client"
import Hero from "@/components/hero"
import "../style/mainStyle.css";

import React from "react";
import Divider from "@/components/divider";
import MidTable from "@/components/midTable";
import BigDiv from "@/components/bigDiv";
import LastHero from "@/components/lastHero";
import LastDiv from "@/components/lastDiv";

export default function Landing() {


  return (
    <div id="head"  className="all ">
      <div className="land">
      
        <img className="blur1 z-50" src="/blur.png" alt="blur"/>
        <img className="blur2 z-0" src="/blur.png" alt="blur"/>
        <img className="blur3 -z-10" src="/blur.png" alt="blur"/>
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
        
                  
        <img className="group1 z-0" src="/design1.png" alt="pic" />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="divider z-10 relative">
        <img src="/vector11.png" alt="vec" className="mt-32 relative z-40 w-full" />
        <div>
        <Divider/>
        </div>
        <img src="/vector12.png" alt="vec" className=" relative z-40 w-full" />
      </div>
      <div className="mid-table z-10 relative">
        <MidTable />
      </div>
      <div id="about" className="big-divider">
      <img  src="/vector8.png" alt="vector8" className="w-full"/>
      <div><BigDiv/></div>
      <img src="vector9.png" alt="vector9" className="w-full"/>  
      </div>
      <div className="last-hero">
        <LastHero/>
      </div>
      <div  className="last-divider">
      <img  src="/vector8.png" alt="vector8" className="w-full"/>
      <div><LastDiv/></div>
      <img  src="vector9.png" alt="vector9" className="w-full last-last-div"/>  
      </div>
    </div>
    
    
  );
}
