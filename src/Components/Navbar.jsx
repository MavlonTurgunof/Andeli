import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { XIcon } from "../../public/icon";
import { BiDownArrow } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="max-md:hidden border-b-1 border-[#EDEDED] ">
        <Container>
          <div className="flex flex-row justify-between items-center py-[20px]">
            <div>
              <Link to={"/"} className="flex items-center  gap-[208px]">
                <img src="/img/Logo.svg" alt="" className="" />
              </Link>
            </div>
            <div className="sticky flex gap-[18px] justify-center items-center ">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-regular ${
                    isActive ? " text-[#0067B3]" : "text-[#939393]"
                  }`
                }
              >
                Все продукты
              </NavLink>

              <NavLink
                to={"ai-assistant"}
                className={({ isActive }) =>
                  `py-[9px] px-[14px] rounded-[18px] text-[14px] font-regular ${
                    isActive ? " text-[#0067B3]" : "text-[#939393]"
                  }`
                }
              >
                ИИ-помощник
              </NavLink>
              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-regular ${
                    isActive ? " text-[#0067B3]" : "text-[#939393]"
                  }`
                }
              >
                Блоги
              </NavLink>
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-regular ${
                    isActive ? " text-[#0067B3]" : "text-[#939393]"
                  }`
                }
              >
                Связаться с нами
              </NavLink>
              <NavLink
                to={"/aboutus"}
                className={({ isActive }) =>
                  `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-regular ${
                    isActive ? " text-[#0067B3]" : "text-[#939393]"
                  }`
                }
              >
                О нас
              </NavLink>
            </div>
            <div className="relative">
              <img
                src="/img/Search.svg"
                alt=""
                className="absolute h-[24px] w-[24px] top-[14px] left-[16px]"
              />

              <input
                type="text"
                placeholder="Поиск товаров..."
                className="bg-[#FAFAFA] border-2 border-[#FAFAFA] w-[408px] pl-[50px] py-[12px] text-[#939393] text-[16px] rounded-full outline-none focus:border-[#008ECC] focus:border-2"
              />
            </div>
            {/* <div className="flex justify-center items-center bg-[#FAFAFA] p-[10.5px] rounded-[10px] ">
              <img
                src="/img/en.png"
                alt=""
                className="h-[27px] w-[27px] mr-[3.5px]"
              />
              <h1 className="text-14px font-medium mr-[6.75px]">English</h1>
              <FaAngleDown />
            </div> */}
          </div>
        </Container>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden py-2 border-b border-[#EDEDED]">
        <div className="flex justify-between items-center px-4">
          <Link to={"/"}>
            <img src="/img/Logo.svg" alt="Logo" />
          </Link>
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
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-100 shadow-lg transform transition-transform duration-300 ${
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
              { to: "/", label: "Все продукты" },
              { to: "/ai-assistant", label: "ИИ-помощник" },
              { to: "/blogs", label: "Блоги" },
              { to: "/contact", label: "Связаться с нами" },
              { to: "/aboutus", label: "О нас" },
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
