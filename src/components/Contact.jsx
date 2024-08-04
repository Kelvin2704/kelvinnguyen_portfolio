import React from "react";
import { SiMinutemailer } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="flex flex-col rounded-xl border lg:h-full py-10 p-2 md:p-5 space-y-3 bg-neutral-800 overflow-hidden">
      <h1 className="text-xl text-neutral-100/50 font-bold">
        Your Ideas? <br />
        My Frontend Expertise <br />
        <span className="text-4xl font-black w-full text-green-500">
          Let's Collaborate!
        </span>
      </h1>

      <form action="" className="flex flex-col font-bold space-y-3">
        <input
          type="text"
          id="yourName"
          name="yourName"
          placeholder="Your name"
          className="bg-neutral rounded-xl outline-none p-3 placeholder:text-neutral-400 w-full border "
        />

        <input
          type="email"
          id="yourEmail"
          name="yourEmail"
          placeholder="yourcompany@email.com"
          className="bg-white rounded-xl outline-none p-3 placeholder:text-neutral-400 w-full border"
        />

        <button
          type="submit"
          className="p-3 font-bold bg-black text-neutral-50 rounded-xl flex items-center justify-center gap-2"
        >
          <SiMinutemailer  className="size-5 text-green-500" /> Email me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
