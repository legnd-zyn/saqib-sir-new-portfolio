"use client";
import Image from "next/image";
import React from "react";
import EmailPNG from "@/images/icons/email.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Name is required")
    .min(4, "Name must be 4 character long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .test("word-count", "Message must have at least 150 words", (value) => {
      if (value) {
        const wordCount = value.split(/\s+/).length;
        return wordCount >= 150;
      }
      return false;
    }),
});

const ContactUsSection = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <section
      id="contact-us"
      className="relative w-full max-w-screen-xl mx-auto px-5 lg:px-10 pt-5 mt-10 py-24 flex items-center flex-col"
    >
      <div className="max-w-lg mr-auto inline-flex flex-col items-start relative">
        <p className="text-gray-700 text-2xl lg:text-3xl font-bold relative mr-auto">
          Contact Us
        </p>
        <p className="text-gray-800 text-4xl lg:text-6xl font-bold">
          Let&apos;s get in touch!
        </p>
      </div>
      <div className="w-full flex flex-col-reverse">
        <div className="w-full h-96 relative object-cover mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.227412317!2d74.00472410718284!3d31.483103660872477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694530779151!5m2!1sen!2s&iwloc=nodirection"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-slate-700 opacity-70"></div>
          <div className="absolute bottom-14 left-10">
            <p className=" text-white font-bold text-3xl">Contact US</p>
            <p className=" text-white text-3xl">Be in touch with us</p>
          </div>
        </div>
        <div className="lg:absolute right-16 -bottom-6 bg-[var(--yellow-color)] p-10 rounded-t-full flex items-center flex-col w-max mx-auto">
          <div className="p-5 w-max rounded-full bg-white mx-auto flex items-center justify-center">
            <Image
              src={EmailPNG}
              className="w-24 rounded-full"
              alt="email-logo"
            />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col max-w-sm font-bold text-xl gap-5 text-gray-700 mt-5"
          >
            <div className="flex flex-col">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                placeholder="your name"
                id="username"
                name="username"
                className="px-4 placeholder-gray-500 py-2 bg-transparent border-2 rounded-md border-gray-400 outline-none focus:shadow-lg"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-sm text-red-500 font-semibold mt-0.5">
                  {formik.errors.username}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="mail@mail.com"
                id="email"
                name="email"
                className="px-4 placeholder-gray-500 py-2 bg-transparent border-2 rounded-md border-gray-400 outline-none focus:shadow-lg"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm text-red-500 font-semibold mt-0.5">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                placeholder="message"
                id="message"
                name="message"
                {...formik.getFieldProps("message")}
                className="px-4 placeholder-gray-500 py-2 bg-transparent border-2 rounded-md border-gray-400 outline-none focus:shadow-lg"
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="text-sm text-red-500 font-semibold mt-0.5">
                  {formik.errors.message}
                </p>
              ) : null}
            </div>
            <div>
              <button
                type="button"
                disabled={!formik.isValid || formik.isSubmitting}
                className="flex-1 w-full bg-[var(--yellow-color-dark)] px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
              >
                Send Thoughts
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
