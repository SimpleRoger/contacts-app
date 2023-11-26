import React from "react";
import logo from "../assets/logo.webp"; // Import the image

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-[auto] ">
      <div class="aspect-none">
      <img src={logo} alt="Logo" className="w-[200px] aspect-none" />{" "}
      </div>
      {/* Use the imported image */}
      <div className="text-4xl my-10">Roger's Contacts</div>
    </div>
  );
}
