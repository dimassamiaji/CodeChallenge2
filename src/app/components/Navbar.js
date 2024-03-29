"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "../../../public/Logo2.png";

function NavbarComponents() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 90) {
        setColor(" #ffffff");
        setTextColor(" #000000");
      } else {
        setColor("transparent");
        setTextColor(" #ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo Perusahaan"
            width={100} // Sesuaikan lebar sesuai kebutuhan
            height={40} // Sesuaikan tinggi sesuai kebutuhan
          />
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Capshut.
          </h1> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="hover:underline p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline p-4">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:underline p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:underline p-4">
            <Link href="/teams">Teams</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="hover:underline p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:underline p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li className="hover:underline p-4 text-4xl hover:text-gray-500">
              <Link href="/teams">Teams</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavbarComponents;
