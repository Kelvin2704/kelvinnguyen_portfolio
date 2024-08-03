import React from "react";
import contact from "../../../assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="contact py-5 md:py-10 bg-neutral-50">
      <div className="container max-w-screen-xl m-auto p-2 w-full h-full">
        <div className="layout grid grid-cols-1 lg:grid-cols-10 gap-5 ">
          <div className="contact-image hidden rounded-xl md:block lg:col-span-6 h-full w-full">
            <img
              src={contact}
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>
          <div className="contact-form p-5 lg:p-10 bg-neutral-300 space-y-5 rounded-2xl lg:col-span-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-custom font-black">
                Your Ideas? <br />
                My Frontend Expertise <br />
                <span className="text-3xl w-full lg:text-4xl text-purple-700">
                  Let's Collaborate!
                </span>
              </h1>
            </div>
            <form
              action=""
              className="flex flex-col space-y-5 font-custom font-bold"
            >
              <div className="">
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  placeholder="Your name"
                  className="bg-white rounded-xl outline-none px-2 py-3 placeholder:text-neutral-600 w-full "
                />
              </div>
              <div className="">
                <input
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  placeholder="yourcompany@email.com"
                  className="bg-white rounded-xl outline-none px-2 py-3 placeholder:text-neutral-600 w-full"
                />
              </div>
              <textarea
                rows={5}
                className="bg-white rounded-xl outline-none px-2 py-3 w-full"
                placeholder=" Tell me a little about the project"
              ></textarea>
              <button
                type="submit"
                className="p-2 bg-neutral-900 text-neutral-50 rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
