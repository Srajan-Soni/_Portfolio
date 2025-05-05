import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { Card, CardBody } from "@nextui-org/react";
import { useTheme } from "../context/ThemeContext"; // import your useTheme

function Contact() {
  const { darkMode } = useTheme(); // get darkMode from context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendMail = () => {
    emailjs
      .sendForm(
        "service_esyu8rq",
        "template_19a3wzj",
        form.current,
        "rLaFIIc-Ru-5s8Xot"
      )
      .then(() => {
        toast.success("Your message has been sent");
        setIsSent(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <div
      name="Contact"
      className={`max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {!isSent ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
          <span className="text-gray-600 dark:text-gray-300 mb-6">
            Please fill out the form below to contact me
          </span>
          <form
            ref={form}
            onSubmit={handleSubmit(sendMail)}
            className={`w-full max-w-md px-8 py-6 rounded-xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-slate-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              Send Your Message
            </h2>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className={`shadow rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500"
                    : darkMode
                    ? "border-gray-700 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your fullname"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className={`shadow rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500"
                    : darkMode
                    ? "border-gray-700 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className={`shadow rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500"
                    : darkMode
                    ? "border-gray-700 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your message"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`w-full rounded-lg py-2 transition-colors ${
                darkMode
                  ? "bg-white text-black hover:bg-gray-300"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[300px]">
          <Card
            className={`w-full max-w-md p-10 text-center shadow-lg rounded-xl ${
              darkMode ? "bg-green-950 text-green-300" : "bg-green-50"
            }`}
          >
            <CardBody>
              <h2
                className={`text-xl font-semibold ${
                  darkMode ? "text-green-300" : "text-green-600"
                }`}
              >
                Your message has been sent successfully! 🎉
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I&apos;ll get back to you as soon as possible.
              </p>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Contact;
