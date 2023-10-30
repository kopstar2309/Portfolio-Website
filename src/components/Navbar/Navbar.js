import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavbarContent from "./NavbarContent";
import { ImHome3 } from "react-icons/im";
import { BsFillPersonFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { TbSettingsFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import "./navbar.css";

const navbarData = [
  {
    Icon: ImHome3,
    Title: "Home",
    Size: 18,
  },
  {
    Icon: BsFillPersonFill,
    Title: "About",
    Size: 20,
  },
  {
    Icon: BsFillFileEarmarkTextFill,
    Title: "Resume",
    Size: 18,
  },
  {
    Icon: TbSettingsFilled,
    Title: "Services",
    Size: 20,
  },
  {
    Icon: FaPhoneAlt,
    Title: "Contact",
    Size: 18,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="header">
        <Hamburger
          // className="hamburger-react"
          direction="right"
          color="#f56539"
          rounded={true}
          toggled={isOpen}
          toggle={handleToggle}
        />
      </div>
      {isOpen && (
        <div className="sidebar">
          {navbarData.map((item) => (
            <NavbarContent
              href={`/${item.Title}`}
              Icon={item.Icon}
              Title={item.Title}
              Size={item.Size}
            />
          ))}
        </div>
      )}
    </div>
  );
}
