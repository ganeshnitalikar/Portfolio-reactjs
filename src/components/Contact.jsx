import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className=" border-b border-white pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center">
        <p className="my-4">{CONTACT.address}</p>
        <a href="#" className="my-4  border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
