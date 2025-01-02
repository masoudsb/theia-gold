"use client";

import "../../../style/loginStyle.css";
import { useState } from "react";
import InputPre from "@/components/inputPre";
import ButtonReg from "@/components/buttonReg";
import ButtonPre from "@/components/buttonPre";

export default function Login() {
  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");
  const [numEro, setNumEro] = useState("");
  const [passEro, setPassEro] = useState("");

  const onButtonClick = (e: any) => {
    e.preventDefault();
    setNumEro("");
    setPassEro("");

    if ("" === num) {
      setNumEro("Please Enter Your Number");
      return;
    }

    if ("" === pass) {
      setPassEro("Please Enter Your Password");
      return;
    }
    if (num.length !== 11) {
      setNumEro("Number Must Be 11 Character");
      return;
    }
    if (pass.length < 7) {
      setPassEro("Password Must Be 8 Character Or Longer");
      return;
    }
  };

  return (
    <>
      <div className="box-login text-3xl">
        <h1 className=" head text-5xl pb-20">Login To Your Account</h1>
        <form
          onSubmit={onButtonClick}
          className="flex flex-col space-y-6  justify-self-center"
        >
          <InputPre
            type="number"
            onChange={(ev: any) => setNum(ev.target.value)}
            classN="remove-arrow"
            value={num}
          >
            Enter Your Number
          </InputPre>
          <label className="lab">{numEro}</label>
          <InputPre
            type="password"
            onChange={(ev: any) => setPass(ev.target.value)}
            classN=""
            value={pass}
          >
            Enter Your Password
          </InputPre>

          <label className="lab">{passEro}</label>

          <ButtonReg type="submit" classN="">
            Login
          </ButtonReg>
        </form>
        <div className="foot-log p-9">
          <p>

          If You Don't Register Go To
          </p>
          <div className="but-d">
          <ButtonPre href="./register" classn="but">
            Sign In
          </ButtonPre>
          </div>
        </div>
      </div>
    </>
  );
}
