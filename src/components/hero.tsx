// import ButtonPre from "./buttonPre";
// import "@/style/heroStyle.css"
// export default function Hero() {
//     return (
//       <div className="w-3/5 px-16">
//           <div className="relative isolate overflow-hidden  px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
         
//             <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
//               <h2 className="">
//               Theia Gold
//               </h2>
//               <h3 className="">
//               will connect you
//               </h3>
//               <p className="first-p mt-12">
//               Navigate the world of Capital with <span> Theia Gold</span>
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//               <p className="last-p">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
//               </p>
                
//                <ButtonPre href="#about" classn="">Let's Explore</ButtonPre>
//               </div>
//             </div>
           
//           </div>
//         </div>
//     )
//   }
  


import ButtonPre from "./buttonPre";
import "@/style/heroStyle.css";

export default function Hero() {
  return (
    <div className="hero-wrap w-full px-8 sm:px-12 md:w-4/5 md:px-16 lg:w-3/5">
      <div className="hero-par relative isolate overflow-hidden px-4 pt-8 sm:rounded-3xl md:pt-16 lg:flex lg:gap-x-20  lg:pt-0">
        <div className="hero-chil max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Theia Gold</h2>
          <h3 className="text-xl sm:text-2xl mt-2">will connect you</h3>
          <p className="first-p mt-6 md:mt-12 text-sm sm:text-base">
            Navigate the world of Capital with <span>Theia Gold</span>
          </p>
          <div className="hero-lite mt-6 md:mt-10 flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-6 lg:justify-start">
            <p className="last-p text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla.
            </p>
            <ButtonPre href="#about" classn="self-end " type="button">Let&apos;s Explore</ButtonPre>
          </div>
        </div>
      </div>
    </div>
  );
}
