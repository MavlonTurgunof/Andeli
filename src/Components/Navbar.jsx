import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  return (
    <div className="border-b-1 border-[#EDEDED]">
      <Container>
        <div className="flex gap-[18px] justify-center items-center py-[16px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-medium ${
                isActive ? "bg-[#0067B3] text-white" : "bg-[#F3F9FB] text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `py-[9px] px-[14px] rounded-[18px] text-[14px] font-medium ${
                isActive ? "bg-[#0067B3] text-white" : "bg-[#F3F9FB] text-black"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"ai-assistant"}
            className={({ isActive }) =>
              `py-[9px] px-[14px] rounded-[18px] text-[14px] font-medium ${
                isActive ? "bg-[#0067B3] text-white" : "bg-[#F3F9FB] text-black"
              }`
            }
          >
            Artificial Intelligence
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) =>
              `py-[9px] px-[14px]  rounded-[18px] text-[14px] font-medium ${
                isActive ? "bg-[#0067B3] text-white" : "bg-[#F3F9FB] text-black"
              }`
            }
          >
            Contacts
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
