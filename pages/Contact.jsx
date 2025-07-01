import React from "react";
import Container from "../src/Components/Container";
import ContactInfo from "../src/Container/Contact/ContactInfo";
import Form from "../src/Container/Contact/Form";

function Contact() {
  return (
    <div className="bg-[#F5F5F5] md:pb-[125px] md:pt-[31px]">
      <Container>
        <div className="rounded-[10px] p-[10px] flex md:flex-row flex-col bg-white max-md:py-[20px]">
          <ContactInfo />
          <Form />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
