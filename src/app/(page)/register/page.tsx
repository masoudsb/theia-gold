"use client";

import { useRouter } from "next/navigation";
import "../../../style/loginStyle.css";
import { useState } from "react";
import InputPre from "@/components/inputPre";
import ButtonReg from "@/components/buttonReg";


export default function Register() {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [natCode, setNatCode] = useState("");
  const [birDay, setBirDay] = useState("");
  const [nameEro, setnameEro] = useState("");
  const [lastNameEro, setlastNameEro] = useState("");
  const [natCodeEro, setNatCodeEro] = useState("");
  const [birDayEro, setBirDayEro] = useState("");

  const router = useRouter();
  const onButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setnameEro("");
    setlastNameEro("");
    setNatCodeEro("");
    setBirDayEro("");

    if ("" === name) {
      setnameEro("Please Enter Your First Name");
      return;
    }

    if ("" === lastName) {
      setlastNameEro("Please Enter Your last Name");
      return;
    }
    if ("" === natCode) {
      setNatCodeEro("Please Enter Yor National Code");
      return;
    }

    if (natCode.length !== 10) {
      setNatCodeEro("National Code Must Be 10 Character");
      return;
    }
    if ("" === birDay) {
      setBirDayEro("Please Enter Yor Birthday");
      return;
    }
    router.push("/register/email&phone");
  };

  return (
    <>
      {/* <div className="box text-3xl">
            <h1 className="head text-5xl pb-20">Register Page</h1>
            <form onSubmit={onButtonClick} className="flex flex-col space-y-4  justify-self-center">
                <div className="flex flex-col space-y-4 ">
                    <input type="text" className="mr-2 outline-transparent remove-arrow rounded text-base px-4 py-1 w-full" onChange={ev => setname(ev.target.value)} value={name} placeholder="Enter Your First Name" />
                <label >{nameEro}</label>
                <input type="text" className=" outline-transparent rounded text-base px-4 py-1" onChange={ev => setlastName(ev.target.value)} value={lastName} placeholder="Enter Your Last Name" />
                    <label >{lastNameEro}</label>
                </div>
                <div className="flex flex-row">
                <div className="flex flex-col">
                    <input type="number" className="mr-2 outline-transparent remove-arrow rounded text-base px-4 py-1" onChange={ev => setNatCode(ev.target.value)} value={natCode} placeholder="Enter Your National Code" />
                        </div>
                <input type="date" className="w-full outline-transparent rounded text-base px-4 py-1" onChange={ev => setBirDay(ev.target.value)} value={birDay}  />
                </div>
                        <label className="lab">{natCodeEro}</label>
                <label className="lab">{birDayEro}</label>
                <button type="submit" className="pb-8 text-blue-600/100 pt-8">Next</button>
            </form>  
        
        </div> */}
      <div className="box-login text-3xl pb-16">
        <h1 className="head text-5xl pb-20">Register Page</h1>
        <form
          onSubmit={onButtonClick}
          className="flex flex-col space-y-4  justify-self-center"
        >
                  <div className="flex flex-col space-y-4 justify-self-center">
                      <InputPre  type="text" onChange={(ev:React.ChangeEvent<HTMLInputElement>) => setname(ev.target.value)} classN="" value={name}>Enter Your First Name</InputPre>
           
            <label className="lab">{nameEro}</label>
                      <InputPre  type="text" onChange={(ev:React.ChangeEvent<HTMLInputElement>) => setlastName(ev.target.value)} classN="" value={lastName}>Enter Your Last Name</InputPre>
     
            <label className="lab">{lastNameEro}</label>
         
                      <InputPre  type="number" onChange={(ev:React.ChangeEvent<HTMLInputElement>) => setNatCode(ev.target.value)} classN="remove-arrow" value={natCode}>Enter Your National Code</InputPre>
          <label className="lab">{natCodeEro}</label>
        
                <InputPre  type="date" onChange={(ev:React.ChangeEvent<HTMLInputElement>) => setBirDay(ev.target.value)} classN="" value={birDay}> </InputPre>
          <label className="lab">{birDayEro}</label>
                  </div>
                       <div className="pb-6"> <ButtonReg type="submit" classN="" onClick={undefined}>Next</ButtonReg>
                       </div>
        </form>
      </div>
    </>
  );
}
