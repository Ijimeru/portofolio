import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";
const BaseFooter = () => {
  return (
    <div className="border-t h-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-center text-gray-500 font-light px-6 py-2 mr-1">Made with Vite+Django+Typescript</p>
        <ul className="flex flex-row gap-x-3 text-text-800">
          <li>
            <a href="https://www.instagram.com/habibinarendra/" target="_blank">
              <IoLogoInstagram className="cursor-pointer hover:-translate-y-1 transition hover:text-pink-400" />
            </a>
          </li>
          <li>
            <a href="tel:081290935642" target="_blank">
              <IoLogoWhatsapp className="cursor-pointer hover:-translate-y-1 transition hover:text-green-500" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/habibi.narendra/" target="_blank">
              <IoLogoFacebook className="cursor-pointer hover:-translate-y-1 transition hover:text-blue-500" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCfc2x16bTDawyDg40sD4YEg" target="_blank">
              <IoLogoYoutube className="cursor-pointer hover:-translate-y-1 transition hover:text-red-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BaseFooter;
