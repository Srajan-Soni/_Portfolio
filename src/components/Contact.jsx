import React, { useRef,useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { Card, CardBody } from "@nextui-org/react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const form = useRef();
  const [isSent, setisSent] = useState(false)

  const sendMail = (data) => {
    // EmailJS sendForm requires a FormData object, not the raw data object
    const formData = new FormData(form.current);

    emailjs
      .sendForm('service_esyu8rq', 'template_19a3wzj', form.current, 'rLaFIIc-Ru-5s8Xot')
      .then(() => {
        toast.success("Your message has been sent");
        setisSent(true)
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        { !isSent ? 
        <div>
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            ref={form}
            onSubmit={handleSubmit(sendMail)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
        </div>
        :
        <Card className="border rounded-md p-10 w-80 m-5 bg-gray-50  container mx-auto px-4 md:px-20 my-16">
          <CardBody className="w-50 m-auto">
            <h2 className=" text-green-600">Your message has been sent ... </h2>
          </CardBody>
        </Card>
}

      </div>
    </>
  );
}

export default Contact;
