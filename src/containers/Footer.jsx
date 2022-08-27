import React from "react";
import iconFacebook from "../assets/icons/iconFacebook.svg";
import iconInstagram from "../assets/icons/iconInstagram.svg";
import iconTwiter from "../assets/icons/iconTwiter.svg";
import iconHome from "../assets/icons/iconHome.svg";
import iconLetter from "../assets/icons/iconLetter.svg";
import iconPhone from "../assets/icons/iconPhone.svg";

const Footer = () => {
  return (
    <footer className="flex md:w-full md:h-auto md:flex md:justify-center bg-primary text-white md:font-roboto">
      <div className="w-full h-full container mx-auto pt-10 pb-5  ">
        <div className=" text-center w-full h-full flex md:justify-between md:flex-row flex-col items-center">
          <div className="md:w-44 space-y-3">
            <h4 className="text-xl mb-5 uppercase">Aguacate</h4>
            <p>We are known for bringing the best for avocado lovers,</p>
          </div>
          <div className="md:w-44 ">
            <h4 className="text-xl mb-5 uppercase">Products</h4>
            <ul className="space-y-3">
              <li>Aguacate Hass</li>
              <li>Aguacate Fuerte</li>
              <li>Agucate Criollo</li>
              <li>Aguacate bacon</li>
            </ul>
          </div>
          <div className="md:w-44">
            <h4 className="text-xl mb-5 uppercase">Collaborators</h4>
            <ul className="space-y-3">
              <li>Binance</li>
              <li>Meta</li>
              <li>Nestle</li>
              <li>Quaker</li>
            </ul>
          </div>
          <div className="md:w-60">
            <h4 className="text-xl space-x-2 mb-5 uppercase">Contact</h4>
            <ul className="space-y-3 ">
              <li className="flex gap-2">
                <img src={iconHome} alt="iconos info" />
                <p className="">Paraguay Asuncion 5155 FM</p>
              </li>
              <li className="flex gap-2">
                <img src={iconLetter} alt="iconos info" />
                <p className="">aguacate@gmail.com</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPhone} alt="iconos info" />
                <p>+595 228 677 669</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPhone} alt="iconos info" />
                <p className="">+595 335 889 775</p>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="w-full flex justify-between items-center mt-10 pt-7 border-t-2 border-white">
          <p>© 2022 Copyright: aguacate.com</p>
          <ul className="flex w-44 justify-around">
            <li className="p-2 rounded-full border-2 border-white">
              <img src={iconFacebook} alt="Social media" />
            </li>
            <li className="p-2 rounded-full border-2 border-white">
              <img src={iconInstagram} alt="Social media" />
            </li>
            <li className="p-2 rounded-full border-2 border-white">
              <img src={iconTwiter} alt="Social media" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
