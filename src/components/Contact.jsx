import { SiMinutemailer } from "react-icons/si";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Heading from "./Heading";
import { FaHandshakeSimple } from "react-icons/fa6";

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const accessKey =
    process.env.PUBLIC_ACCESS_KEY || "88c969e4-ac09-4eb8-b483-9f6a275eebe2";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Message from Contact form",
      subject: "New Contact Message from Kelvin Portfolio Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  return (
    <div className="order-8 col-span-2 lg:order-7 xl:order-3 lg:col-span-2 xl:col-span-1 xl:row-span-3 max-h-svh">
      <div className="flex flex-col rounded-xl border-2 border-neutral-200/20 lg:h-full py-5 p-2 md:p-10 xl:p-5 space-y-4 bg-neutral-800 overflow-hidden">
        <Heading text={"I have skills"} icon={<FaHandshakeSimple color="#22c55e" />} />
        <span className="text-4xl text-center font-black w-full text-green-500">
          Let's Collaborate!
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col font-bold space-y-3"
        >
          <input
            type="text"
            {...register("name", {
              required: "Your name is required",
              maxLength: 80,
            })}
            placeholder="Your name"
            autoComplete="false"
            className={`bg-neutral rounded-xl outline-none p-3 xl:p-2 placeholder:text-neutral-400 w-full border 
              ${
                errors.name
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}

          <input
            type="email"
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
            placeholder="yourcompany@email.com"
            className={`bg-white rounded-xl outline-none p-3 xl:p-2 placeholder:text-neutral-400 w-full border 
              ${
                errors.email
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }
              `}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}

          <textarea
            {...register("message", { required: true })}
            rows={3}
            placeholder="Let me know your ideas"
            className="p-3 xl:p-2 rounded-xl placeholder:text-neutral-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="p-3 md:text-lg font-bold bg-green-500 hover:bg-green-400 text-neutral-50 rounded-xl flex items-center justify-center gap-2 transition-all "
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                <SiMinutemailer className="size-5 text-neutral-50" /> Email me
              </>
            )}
          </button>
        </form>
        {isSubmitSuccessful && isSuccess && (
          <div className="mt-3 text-sm text-center text-green-500">
            Thanks you! I glad of your email.
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-3 text-sm text-center text-red-500">
            {message || "Something went wrong. Please try later."}
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default ContactForm;
