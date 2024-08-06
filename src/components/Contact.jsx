import React from "react";
import { SiMinutemailer } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="order-8 col-span-2 lg:order-7 xl:order-3 lg:col-span-2 xl:col-span-1 xl:row-span-3 ">
      <div className="flex flex-col rounded-xl border-2 border-neutral-200/20 lg:h-full py-5 p-2 md:p-10 xl:p-5 space-y-4 bg-neutral-800 overflow-hidden">
        <h1 className="text-neutral-100 md:text-lg">
          You have ideas ? <br />
          I have skills <br />
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
          <textarea
            name="textarea"
            id="yourtext"
            rows={3}
            placeholder="Let me know your ideas"
            className="p-3 rounded-xl placeholder:text-neutral-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="p-3 md:text-lg font-bold bg-green-500 hover:bg-green-400 text-neutral-50 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <SiMinutemailer className="size-5 text-neutral-50" /> Email me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
