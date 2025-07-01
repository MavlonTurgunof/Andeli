import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { XIcon } from "../../public/icon";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="max-md:hidden border-b-1 border-[#EDEDED]">
        <Container>
          <div className="flex gap-[18px] justify-center items-center py-[16px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `py-[9px] px-[14px] rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"ai-assistant"}
              className={({ isActive }) =>
                `py-[9px] px-[14px] rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
            >
              Artificial Intelligence
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
            >
              Contacts
            </NavLink>
          </div>
        </Container>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden py-[10px] border-b-1 border-[#EDEDED]">
        <div className="flex justify-between items-center px-[10px]">
          <img src="/img/Logo.svg" alt="" className="" />
          <div className="md:hidden ">
            <button
              className="lg:hidden bg-[#0067B3] p-3 rounded-[15px]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <img src="/img/menu.svg" alt="menu" className="h-7 w-8" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        <div
          className={`p-[10px] rounded-tl-3xl fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 duration-1000 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-row">
            <button onClick={() => setMobileMenuOpen(false)}>
              <XIcon />
            </button>
          </div>
          <div className="flex flex-col gap-[18px] justify-center items-start py-[16px] pl-[70px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `py-[9px] px-[14px] rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to={"ai-assistant"}
              className={({ isActive }) =>
                `py-[9px] px-[14px] rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Artificial Intelligence
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-medium ${
                  isActive
                    ? "bg-[#0067B3] text-white"
                    : "bg-[#F3F9FB] text-black"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
