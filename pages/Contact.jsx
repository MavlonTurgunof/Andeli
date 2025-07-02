import React, { useState } from "react";
import Container from "../src/Components/Container";
import ContactInfo from "../src/Container/Contact/ContactInfo";
import Form from "../src/Container/Contact/Form";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../src/Container/Contact/Modal";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbznMZjTEHsqpJkZmB_TGhdbDBwFUGkQrsgNnjWngU7F4DW1KxTuip-sVy-3XUj91CoTxA/exec";

    const formData = new FormData();
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("phoneNumber", form.phoneNumber);
    formData.append("message", form.message);

    try {
      setLoading(true);
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsModalOpen(true);
        setLoading(false);
        setStatus("success");
        setText("Отправлено успешно!");
        setTimeout(() => {
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      setStatus("fail");
      setText("При отправке вашей информации произошла ошибка!");
      setIsModalOpen(true);
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] md:pb-[125px] md:pt-[31px]">
      <Container>
        <div className="rounded-[10px] p-[10px] flex md:flex-row flex-col bg-white max-md:py-[20px]">
          <ContactInfo />
          <Form
            handleSubmit={handleSubmit}
            form={form}
            setForm={setForm}
            loading={loading}
          />
          <Modal
            isModalOpen={isModalOpen}
            status={status}
            text={text}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
