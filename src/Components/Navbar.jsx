import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { XIcon } from "../../public/icon";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="max-md:hidden border-b-1 border-[#EDEDED] ">
        <Container>
          <div className="sticky flex gap-[18px] justify-center items-center py-[16px]">
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
              Продукты
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
              AI Помощник
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
              Контакты
            </NavLink>
          </div>
        </Container>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden py-2 border-b border-[#EDEDED]">
        <div className="flex justify-between items-center px-4">
          <img src="/img/Logo.svg" alt="Logo" />
          <button
            className="bg-[#0067B3] p-2 rounded-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <img src="/img/menu.svg" alt="menu" className="h-7 w-8" />
          </button>
        </div>

        {/* Overlay backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } rounded-tl-3xl`}
        >
          {/* Close Button */}
          <div className="flex justify-start p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-red-500 transition"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-start px-8 py-4 space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Продукты" },
              { to: "/ai-assistant", label: "AI Помощник" },
              { to: "/contact", label: "Контакты" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `w-full text-left px-4 py-2 rounded-full text-sm font-medium transition duration-150 ${
                    isActive
                      ? "bg-[#0067B3] text-white shadow"
                      : "bg-[#F3F9FB] text-black hover:bg-[#DFF1FA]"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
