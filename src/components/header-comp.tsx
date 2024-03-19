import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

const HeaderComp = () => {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
      {/* User Information */}
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
          {/* prof img */}
          <img
            className=" w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpAIprXCYrYC9zsTc6oJJdUPZXUrKCWgJ7g&usqp=CAU"
            alt="profile-image"
          />
        </div>
        {/* prof name */}
        <small>HI, Shweta</small>
      </div>
      {/* right side of header */}
      <nav className="flex items-center gap-2">
        <div>
          <FontAwesomeIcon icon={faChartPie} size="2xl"/>
        </div>
        <div><Button className="px-4 py-2 text-white bg-red-600 border-red-600 hover:bg-red-400 rounded-xl">Sign Out</Button></div>
      </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
