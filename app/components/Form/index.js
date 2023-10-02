import React from "react";
import AboutUs from "../AboutUs";

export default function Form() {
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
            <form>
              <div class="mb-6">
                <input
                  placeholder="اسم الشخص "
                  type="text"
                  id="password"
                  className=" outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  placeholder="الرقم"
                  type="number"
                  id="repeat-password"
                  className=" outline-none remove-arrow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  placeholder="ايميل "
                  type="email"
                  id="repeat-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
                  required
                />
              </div>
              <div className="mb-6">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                >
                  <option value="" disabled selected>
                    نوع البزنس :
                  </option>
                  <option value="US">مقهى</option>
                  <option value="CA">مطعم</option>
                  <option value="FR">مجموعة مطاعم</option>
                  <option value="DE">فندق</option>
                </select>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className=" outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
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
