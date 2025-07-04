import { useState } from "react";
import Container from "../../Components/Container";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "ANDELI SVC-D500W",
    images: [
      "/ProDetail/watch1.png",
      "/ProDetail/watch2.png",
      "/ProDetail/watch3.png",
      "/ProDetail/watch4.png",
    ],
    specs: [
      "Напряжение, В: 220",
      "Входное напряжение, В: 110-250",
      "Мощность, ВА: 1000",
      "Вес (Нетто/Брутто), кг: 5",
      "Тип: Вертикальный / Напольный",
    ],
    description:
      "Производительность 1000VA Напряжение 220V Входное напряжение 110V-250V Выходное напряжение 220 В ± 3%, 110В ± 3% Частота 50H/60Hz Время реакции <1 сек. (Против 10% отклонения входного напряжения) Эффективность > 90% Температура окружающей среды -10 ° C ~ ± 40 ° С Относительная влажность <90% Искажение формы волны Номера для верности отсутствие сигнала Коэффициент мощности COS ∮ 0,8 Insutalion сопротивления > 5 мОм",
  };

  return (
    <Container>
      <div className="px-[10px]">
        <div className="flex mt-[32px] md:flex-row flex-col gap-[45px] mb-[25px]">
          {/* Left side: Thumbnails and Main Image */}
          <div className="flex md:flex-row flex-col-reverse gap-[24px] pb-[62px] border-b-1 border-[#E5E7EB]">
            <div className="flex md:flex-col flex-row md:gap-[16px] gap-[10px]">
              {product.images.map((img, idx) => (
                <div className="bg-[#F3F9FB] rounded-[16px] w-full h-[] md:w-[140px] md:h-[157.5px]">
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
            <div className="w-full md:w-[640px] md:h-[678px] h-[420px] bg-[#F3F9FB]">
              <img
                src={product.images[selectedImage]}
                alt="Main Product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side: Product Info */}
          <div className="md:mt-[25px]">
            <h2 className=" text-center md:text-[36px] md:font-semibold text-[30px] font-semibold">
              {product.name}
            </h2>
            <ul className="list-disc md:pl-5 text-[16px] font-normal pl-[20px]">
              {product.specs.map((spec, idx) => (
                <li key={idx} className="">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-[16px] font-normal mb-[71px]">
          <h1 className="font-semibold text-[18px]">Описание товара:</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
