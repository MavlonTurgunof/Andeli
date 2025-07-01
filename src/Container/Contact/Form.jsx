import React from "react";

function Form() {
  return (
    <div className="flex-1 p-[50px] ">
      <div className="grid grid-cols-2 flex-1  gap-[39px]">
        <div className="flex  flex-col">
          <label
            htmlFor="firstName"
            className="text-[12px] font-medium text-[#8D8D8D]"
          >
            First Name
          </label>
          <input
            type="text"
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex  flex-col">
          <label
            htmlFor="firstName"
            className="text-[12px] font-medium text-[#8D8D8D]"
          >
            Last Name
          </label>
          <input
            type="text"
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex  flex-col">
          <label
            htmlFor="firstName"
            className="text-[12px] font-medium text-[#8D8D8D]"
          >
            Email
          </label>
          <input
            type="text"
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex  flex-col">
          <label
            htmlFor="firstName"
            className="text-[12px] font-medium text-[#8D8D8D]"
          >
            PhoneNumber
          </label>
          <input
            type="text"
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex  flex-col col-span-2">
          <label
            htmlFor="firstName"
            className="text-[12px] font-medium text-[#8D8D8D]"
          >
            Message
          </label>{" "}
          <input
            type="text"
            placeholder="Write your message"
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
      </div>
      <button className="float-end w-fit px-[48px] py-[15px] bg-black text-white mt-[45px]">
        Send Message
      </button>
    </div>
  );
}

export default Form;
