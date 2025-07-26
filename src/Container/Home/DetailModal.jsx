import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

function DetailModal({ setIsOpenModal }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "ANDELI SVC-D500W",
    images: [
      "/ProDetail/img1.png",
      "/ProDetail/img2.png",
      "/ProDetail/img3.png",
      "/ProDetail/img4.png",
      "/ProDetail/img5.png",
    ],
    specs: [
      "Напряжение, В: 220",
      "Входное напряжение, В: 110-250",
      "Мощность, ВА: 1000",
      "Вес (Нетто/Брутто), кг: 5",
    ],
    type: "Напольный",
    description:
      "Производительность 1000VA Напряжение 220V Входное напряжение 110V-250V Выходное напряжение 220 В ± 3%, 110В ± 3% Частота 50H/60Hz Время реакции <1 сек. (Против 10% отклонения входного напряжения) Эффективность > 90% Температура окружающей среды -10 ° C ~ ± 40 ° СОтносительная влажность <90% Искажение формы волны Номера для верности отсутствие сигнала Коэффициент мощности COS ∮ 0,8 Insutalion сопротивления > 5 мОм",
  };

  return (
    <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-60">
      <button
        onClick={() => setIsOpenModal(false)}
        className="absolute top-[20px] right-[20px] z-50 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <RxCross1 size={24} />
      </button>
      <div className="relative px-[10px] max-md: m-[10px] bg-white max-w-[1240px]  max-h-[98vh] overflow-y-auto rounded-t-[10px] scrollbar-thin scrollbar-thumb-gray-400">
        <div className="flex mt-[32px] md:flex-row flex-col gap-[45px] mb-[25px]">
          {/* Left side: Thumbnails and Main Image */}
          <div className="flex md:flex-row flex-col-reverse gap-[24px] md:pb-[62px] pb-[20px] border-b-1 border-[#E5E7EB]">
            <div className="flex md:flex-col flex-row md:gap-[16px] gap-[10px]">
              {product.images.map((img, idx) => (
                <div className="bg-[#F3F9FB] rounded-[8px] w-full  md:w-[93px] md:h-[124px]">
                  <img
                    key={idx}
                    src={`${img}`}
                    alt={`Thumbnail ${idx}`}
                    className={`w-full h-full object-contain cursor-pointer border rounded-[16px] ${
                      selectedImage === idx
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  />
                </div>
              ))}
            </div>
            <div className="w-full md:w-[522px] md:h-[696px] rounded-[14px] h-[420px] bg-[#F3F9FB]">
              <img
                src={product.images[selectedImage]}
                alt="Main Product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side: Product Info */}
          <div className="md:mt-[25px]">
            <h1 className="text-black text-[24px] md:text-[32px] font-normal md:font-normal ">
              Стабилизаторы напряжений
            </h1>
            <h2 className=" md:text-[32px] md:font-semibold text-[20px] font-semibold">
              {product.name}
            </h2>
            <ul className="list-disc md:pl-5 text-[20px] md:mt-[48px] mt-[24px] font-normal pl-[20px]">
              {product.specs.map((spec, idx) => (
                <li key={idx} className="">
                  {spec}
                </li>
              ))}
            </ul>

            <h1 className="md:mt-[48px] mt-[24px] text-[20px]">
              Тип: <span className="text-[#F5A623]">{product.type}</span>
            </h1>
            <div className="space-y-2 md:mt-[164px] mt-[64px]">
              <button className="w-full text-[16px] font-normal text-white py-[14px] bg-[#0067B3]  rounded-[14px]">
                Позвонить +998 99 999 99 99
              </button>
              <button className="w-full text-[16px] font-normal text-[#666666] py-[14px] bg-[#FAFAFA]  rounded-[14px]">
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
        <div className="text-[16px] font-normal mb-[71px]">
          <h1 className="font-semibold text-[18px]">Описание товара:</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
