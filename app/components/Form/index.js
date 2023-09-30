import React from "react";
import Benefit from "../Benefit";
export default function Form() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-around ">
        <Benefit />
        <div className="flex items-center flex-col-reverse lg:flex-row">
        <div className="px-10 w-96 bg-[#250D61] lg:-translate-y-40 -translate-y-20 py-6 lg:mr-96  ">
          <div className="text-center text-white">
            <p className="text-3xl pb-4 pt-4 ">تواصل مع فريق المبيعات</p>
            <p className="pb-6">
              بالأرقام.. تزداد أرباح عملاءنا بمجرّد الانضمام لمبشر
            </p>
          </div>
          <form>
            <div class="mb-6">
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                dir="rtl"
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
            <div class="mb-6">
              <input
                type="text"
                class=" outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="اسم البزنس"
                required
                dir="rtl"
              />
            </div>
            <div class="mb-6">
              <input
                placeholder="اسم الشخص "
                type="text"
                id="password"
                class=" outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                required
                dir="rtl"
              />
            </div>
            <div class="mb-6">
              <input
                placeholder="الرقم"
                type="number"
                id="repeat-password"
                class=" outline-none remove-arrow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                required
                dir="rtl"
              />
            </div>
            <div class="mb-6">
              <input
                placeholder="ايميل "
                type="email"
                id="repeat-password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
                required
                dir="rtl"
              />
            </div>
            <button
              type="submit"
              class="mb-8 text-[#250D61] bg-white  focus:ring-4 border-[#7365DE73] border-2 font-medium  w-full rounded-lg text-sm px-5 py-2.5 text-center "
            >
              تسجيل
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}
