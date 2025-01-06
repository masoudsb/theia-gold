"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "@/style/uploadStyle.css";
import ButtonReg from "@/components/buttonReg";
import Image from "next/image";
export default function UploadFile() {
  const router = useRouter();

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    perPic: null,
    idPic: null,
    papPic: null,
    licPic: null,
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    perPic: false,
    idPic: false,
    papPic: false,
    licPic: false,
  });
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = e.target.files?.[0] || null;
    setFiles((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  const handleRemove = (key: string) => {
    setFiles((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  const handleReg = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    let hasError = false;
    for (const key in files) {
      if (!files[key]) {
        newErrors[key] = true;
        hasError = true;
      } else {
        newErrors[key] = false;
      }
    }

    setErrors(newErrors);
    if (hasError) {
      console.log("All Fields Must Be Filled!");
      return;
    }
    const formData = new FormData();
    for (const key in files) {
      if (files[key]) {
        formData.append(key, files[key]!);
      }
    }
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Files Uploaded Successfully");
        router.replace("/");
      } else {
        console.log("Error Files Uploading");
      }
    } catch (error) {
      console.log("Error During Files Uploading", error);
    }
  };
  return (
    <>
      <div className="box-up">
        <form
          onSubmit={handleReg}
          className="my-0 mx-auto grid grid-cols-2 gap-7 "
        >
          {[
            { key: "perPic", label: "Personal Photo For Authentication" },
            { key: "idPic", label: "ID Card Photo" },
            { key: "papPic", label: "Identify Paper Photo" },
            { key: "licPic", label: "Business License Photo" },
          ].map(({ key, label }) => (
            <div key={key} className="col-span-1">
              <label
                htmlFor={key}
                className="block text-xl font-medium cursor-pointer pt-6 lab-fir"
              >
                {label}
              </label>
              <div className=" flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 pb-16 pt-4">
                {files[key] ? (
                  <div className="flex flex-col item-center">
                    <Image
                      src={URL.createObjectURL(files[key]! as Blob)}
                      alt={label}
                      className="max-h-32 rounded-lg mb-4"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemove(key)}
                      className="mt-2 px-4 py-2 bg-red-600 text-white text-sm rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto size-20 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm/6 text-gray-600 justify-contact-center">
                      <label
                        htmlFor={key}
                        className="lab-up p-1 px-2 mb-4 mx-auto relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span className="mx-auto">Upload a file</span>
                        <input
                          id={key}
                          name={key}
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFile(e, key)}
                        />
                      </label>
                    </div>
                    <p className="up-p text-xs/5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
              {errors[key] && (
                <p className="text-xl text-red-600">
                  This Field Is Required!
                </p>
              )}
            </div>
          ))}
          <div className="pb-6 mx-auto col-span-2">
            {" "}
            <ButtonReg type="submit" classN="btn-fin">
              Registration
            </ButtonReg>
          </div>
        </form>
      </div>
    </>
  );
}
