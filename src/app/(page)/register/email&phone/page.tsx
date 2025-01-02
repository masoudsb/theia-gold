"use client";

import { useRouter } from "next/navigation";
import "../../../../style/loginStyle.css";
import { useState } from "react";
import InputPre from "@/components/inputPre";
import ButtonReg from "@/components/buttonReg";

export default function Email() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailEro, setEmailEro] = useState("");
  const [phoneEro, setPhoneEro] = useState("");
  const [vryCode, setVryCode] = useState("");
  const [vryCodeEro, setVryCodeEro] = useState("");
  const [show, setShow] = useState(false);
  
  
  const onButtonClick = (e: any) => {
    e.preventDefault();

    setEmailEro("");
    setPhoneEro("");
    
    if ("" === email) {
      setEmailEro("Please Enter Your Email");
      return;
    }

    if ("" === phone) {
      setPhoneEro("Please Enter Yor Phone Number");
      return;
    }

    if (phone.length !== 11) {
      setPhoneEro("Phone Number Must Be 11 Character");
      return;
    }

    setShow(true);
  };
  const router=useRouter()
    const handleVry = (e: any) => {
        e.preventDefault();
        setVryCodeEro("")
    if (vryCode.length !== 6) {
      setVryCodeEro("Vrify Code Must Be 6 Character");
      return;
      }
      
      router.push("/register/email&phone/uploaded")
  };

  return (
    <>
      {/* <div className="box-login text-3xl">
        <h1 className="head text-5xl pb-20">Verify Page</h1>
        <div className={show ? "hidden" : ""}>
          <form
            onSubmit={onButtonClick}
            className={`flex flex-col space-y-4  justify-self-center`}
          >
            <div className="flex flex-col space-y-4 ">
              <input
                type="email"
                className="mr-2 outline-transparent remove-arrow rounded text-base px-4 py-1 w-full"
                onChange={(ev) => setEmail(ev.target.value)}
                value={email}
                placeholder="Enter Your Email"
              />
              <label className="lab">{emailEro}</label>
              <input
                type="number"
                className="mr-2 outline-transparent remove-arrow rounded text-base px-4 py-1"
                onChange={(ev) => setPhone(ev.target.value)}
                value={phone}
                placeholder="Enter Your Phone Number"
              />
              <label className="lab">{phoneEro}</label>
            </div>

            <button type="submit" className="pb-8 text-blue-600/100 pt-8">
              Next
            </button>
          </form>
        </div>
        <div className={show ? "" : "hidden"}>
          <form
            onSubmit={handleVry}
            className={`flex flex-col space-y-4  justify-self-center`}
          >
            <div className="flex flex-col space-y-4 ">
              <input
                type="number"
                className="mr-2 outline-transparent remove-arrow rounded text-base px-4 py-1"
                onChange={(ev) => setVryCode(ev.target.value)}
                value={vryCode}
                placeholder="Enter Your Vrify Code"
              />
              <label>{vryCodeEro}</label>
            </div>

            <button type="submit" className="pb-8 text-blue-600/100 pt-8">
              Verify
            </button>
          </form>
        </div>
      </div> */}
      <div className="box-login ">
        <h1 className="head text-5xl pb-20">Verify Page</h1>
        <div className={show ? "hidden" : ""}>
          <form
            onSubmit={onButtonClick}
            className={`flex flex-col space-y-4  justify-self-center`}
          >
            <div className="flex flex-col space-y-4 ">
               <InputPre  type="email" onChange={(ev:any) => setEmail(ev.target.value)} classN="btn-num" value={email}>Enter Your Email</InputPre>
         
              <label className="lab">{emailEro}</label>
                <InputPre  type="number" onChange={(ev:any) => setPhone(ev.target.value)} classN="remove-arrow btn-num" value={phone}>Enter Your Phone Number</InputPre>
              
              <label className="lab">{phoneEro}</label>
            </div>
           <div className="pb-6"> <ButtonReg type="submit" classN="">Next</ButtonReg>
                                  </div>
          </form>
        </div>
        <div className={show ? "" : "hidden"}>
          <form
            onSubmit={handleVry}
            className={`flex flex-col space-y-4  justify-self-center`}
          >
            <div className="flex flex-col space-y-4 ">
            <InputPre  type="number" onChange={(ev:any) => setVryCode(ev.target.value)} classN="remove-arrow btn-num" value={vryCode}>Enter Your Vrify Code</InputPre>
          
              <label className="lab">{vryCodeEro}</label>
            </div>
            <div className="pb-6"> <ButtonReg type="submit" classN="">Verify</ButtonReg>
                                  </div>
            {/* <button type="submit" className="pb-8 text-blue-600/100 pt-8">
              Verify
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}
