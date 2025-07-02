import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby5jriQopbPR_rUCwjbH4mvua4c9uzuaQ-qtaK05q3leGezr0MKQi0sNhZwP3Uc4hbuBQ/exec";

    try {
      setLoading(true);
      const response = await fetch(scriptURL, {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      toast.success("✅ Muvaffaqiyatli yuborildi");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Ma'lumotlaringizni yuborishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 md:p-[50px] p-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[39px]">
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-[16px] font-medium text-[#8D8D8D] mb-2"
          >
            Имя
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-[16px] font-medium text-[#8D8D8D] mb-2"
          >
            Фамилия
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[16px] font-medium text-[#8D8D8D] mb-2"
          >
            Электронная почта
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-[16px] font-medium text-[#8D8D8D] mb-2"
          >
            Номер телефона
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="text-[16px] font-medium text-[#8D8D8D] mb-2"
          >
            Сообщение
          </label>
          <input
            type="text"
            name="message"
            placeholder="Напишите свое сообщение..."
            value={formData.message}
            onChange={handleChange}
            required
            className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="md:float-end w-fit px-[48px] py-[15px] bg-black text-white mt-[45px] rounded-[15px]"
        disabled={loading}
      >
        {loading ? "Отправка..." : "Отправить сообщение"}
      </button>
    </form>
  );
}

export default Form;
