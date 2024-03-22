'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Model from "@/components/modal";
import LoginForm from "@/components/login-form";

const HomePage = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  return (
    <>
    {modelIsOpen && (
      <Model show={modelIsOpen} onClose={setModelIsOpen}><LoginForm/></Model>
    )}
    <div className=" h-screen bg-slate-600">
      <header className=" w-1/2 mx-auto pt-5 text-white font-extrabold">
        <div className="flex">
          <Image
            className="md:w-24 max-sm:w-14 lg:w-28 mx-auto"
            src="https://i.postimg.cc/YSm4NnDb/e7b7a620ecba43d78b9ed03f4054f37f-1.png"
            width={100}
            height={100}
            alt="Logo"
          />
          <button className=" w-10 h-10" onClick={()=>setModelIsOpen(true)}>
            <FontAwesomeIcon size="2xl" icon={faQrcode} />
          </button>
        </div>
        <h1 className=" w-2/3 max-sm:text-sm lg:text-2xl md:text-lg mx-auto text-center mt-4">
          THE ULTIMATE FINANCE TRACKER
        </h1>
        <h2 className=" w-1/2 max-sm:text-sm lg:text-lg md:text-sm mx-auto mt-2 text-center font-semibold">
          Track all your cash flow in one place.
        </h2>
      </header>
      <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-slate-200 lg:w-1/2 md:w-1/3 sm:w-1/4 mx-auto rounded my-3 py-4">
          <div className="img-div">
            <Link href={""}>
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfxcq85Ofj8WcJhklpD_PD678cJyt8mDjHg&usqp=CAU"
                alt="money"
              />
            </Link>
          </div>
          <div className="img-div">
            <Link href={""}>
              <img
                className="img"
                src="data:image/jpeg;base64,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"
                alt="budget"
              />
            </Link>
          </div>
          <div className="img-div mt-2">
            <Link href={""}>
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnuVqJ-IsGxQqGvRVXTdQBEgmkDgcmPf2X6-n-EzuLYy3bECnrkrBWZo7Ck7luNrEeBU&usqp=CAU"
                alt="bills payable"
              />
            </Link>
          </div>
          <div className="img-div mt-2">
            <Link href={""}>
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUj607l01ZQ7ldVBUtfI8c_3rMScN5aqXXg&usqp=CAU"
                alt="bills tracker"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
