import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center rounded-xl border h-[60vh] lg:h-full p-2 md:p-5 space-y-2 bg-neutral-800 overflow-hidden">
      <h1 className="text-lg text-neutral-50 font-custom font-bold">
        Your Ideas? <br />
        My Frontend Expertise <br />
        <span className="text-4xl font-custom font-black w-full text-green-500">
          Let's Collaborate!
        </span>
      </h1>

      <form action="" className="flex flex-col font-custom font-bold space-y-3">
        <input
          type="text"
          id="yourName"
          name="yourName"
          placeholder="Your name"
          className="bg-neutral rounded-xl outline-none p-2 placeholder:text-neutral-400 w-full border "
        />

        <input
          type="email"
          id="yourEmail"
          name="yourEmail"
          placeholder="yourcompany@email.com"
          className="bg-white rounded-xl outline-none p-2 placeholder:text-neutral-400 w-full border"
        />

        <button
          type="submit"
          className="p-2 font-custom font-bold bg-black text-neutral-50 rounded-xl"
        >
          Email me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
