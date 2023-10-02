"use client";

import React, { useRef } from "react";
import AboutUs from "../AboutUs";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cnf4hkf",
        "template_libm1rg",
        form.current,
        "gVYeu2g8jVt2Ptfxr"
      )
      .then((result) => {
        console.log(result.text);

        // Clear the form fields
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-around bg-white ">
        <AboutUs />
        <div className="flex items-center flex-col-reverse lg:flex-row">
          <div className="px-10 lg:w-[500px] bg-[#250D61] lg:-translate-y-40 -translate-y-20 py-10 lg:ml-60">
            <div className="text-center text-white">
              <p className="text-4xl pb-4 pt-4 ">
                احصل على عرض سعر لباقات المنيو الالكتروني
              </p>
              <p className="pb-6">
                قم بتعبئة البيانات للتواصل معك وارسال عرض سعر خاص{" "}
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="mb-6">
                <input
                  name="user_name"
                  placeholder="اسم الشخص "
                  type="text"
                  className=" outline-none shadow-sm bg-gray-50 border border-gray-300 font-medium text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  name="user_number"
                  placeholder="الرقم"
                  type="number"
                  className=" outline-none remove-arrow shadow-sm bg-gray-50 border font-medium border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  name="user_email"
                  placeholder="ايميل "
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
                  required
                />
              </div>
              <div className="mb-6">
                <select
                  name="user_select"
                  className="outline-none  bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                >
                  <option value="" disabled selected>
                    نوع البزنس :
                  </option>
                  <option value="مقهى">مقهى</option>
                  <option value="مطعم">مطعم</option>
                  <option value="مجموعة مطاعم">مجموعة مطاعم</option>
                  <option value="فندق">فندق</option>
                </select>
              </div>
              <div className="mb-6">
                <input
                  name="user_BusinessName"
                  type="text"
                  className=" outline-none shadow-sm bg-gray-50 border border-gray-300 font-medium text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="اسم البزنس"
                  required
                />
              </div>

              <button
                type="submit"
                className="mb-8 mt-6 text-[#250D61] bg-white  focus:ring-4 border-[#7365DE73] border-2   w-full rounded-lg text-lg px-5 py-2.5 text-center hover:bg-[#7365DE] hover:text-white font-bold"
              >
                احصل على عرض سعر{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
