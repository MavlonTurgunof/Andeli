import React from "react";
import Check from "../../../public/Check.json";
import XIcon from "../../../public/XIcon.json";
import Lottie from "lottie-react";

function Modal({ isModalOpen, status, text, setIsModalOpen }) {
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white  shadow-lg md:w-[400px] w-[300px] p-[15px] flex flex-col items-center gap-5 justify-center rounded-2xl">
            {status === "success" ? (
              <Lottie
                animationData={Check}
                loop={false}
                autoplay={true}
                style={{ width: 150, height: 150 }}
              />
            ) : (
              <Lottie
                animationData={XIcon}
                loop={false}
                autoplay={true}
                style={{ width: 150, height: 150 }}
              />
            )}
            <p className="text-[20px] font-semibold text-center">{text}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 rounded-[8px] text-white bg-[#008ECC]"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
