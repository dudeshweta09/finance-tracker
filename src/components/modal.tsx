import React from "react";

const Model = ({ show, onClose, children }:any) => {
  return (
    <div
    className="absolute top-0 left-0 w-full h-full z-10 text-white translate-y-4 transition duration-500">
      <div className="container max-w-2xl mx-auto h-[80vh] rounded-3xl bg-slate-800 py-6 px-4">
        <button
        onClick={()=>{
            onClose(false);
        }}
        className="w-7 h-7 mb-4 font-bold rounded-full bg-slate-600">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Model;
