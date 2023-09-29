import React from "react";
import Form from "../Form";
export default function HeroSection() {
  return (
    <>
    <div className="relative bg-gray-900 py-12">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50 "
      />
      <div className="relative ml-20 flex max-w-3xl flex-col items-start px-6 py-32 text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          Describe the value of booking an appointment
        </h1>
        <p className="mt-4 text-xl text-white">
          No need to get clever. Tell people exactly what you're offering, then
          use this space to communicate your key value proposition.
        </p>
      </div>
    </div>
    <Form />
    </>
  );
}
