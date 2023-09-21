import React from "react";
import facebook from "@/images/icons/facebook.png";
import twitter from "@/images/icons/twitter.png";
import instagram from "@/images/icons/instagram.png";
import linkedin from "@/images/icons/linkedin.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full py-5 px-10 ">
        <Link href={"/"}>
          <div className="logo font-bold text-justify w-max flex flex-col lg:flex-row items-center mx-a">
            <p className="logo-text text-3xl text-justify w-full tracking-[6px] leading-tight">
              SAQIB
            </p>
            <p className="text-2xl font-light text-justify">Chaudhary</p>
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <p className="hidden lg:flex">Follow me on</p>
          <ul className="flex gap-5">
            {[
              {
                icon: facebook,
                alt: "facebook",
                link: "https://web.facebook.com/SaqibChaudhry007",
              },
              {
                icon: twitter,
                alt: "twitter",
                link: "https://twitter.com/saqibchaudhry07",
              },
              {
                icon: instagram,
                alt: "instagram",
                link: "https://www.instagram.com/saqibchaudhry007/",
              },
              {
                icon: linkedin,
                alt: "linkedin",
                link: "https://www.linkedin.com/in/saqibchaudhary/",
              },
            ].map(({ icon, alt, link }, ind) => (
              <li key={ind}>
                <Link href={link} target="_blank">
                  <Image src={icon} alt={alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
