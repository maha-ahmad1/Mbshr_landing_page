import React from "react";
import { incentives } from "store/app/data/constants/Incentives";
export default function About() {
  return (
    <div className="bg-gray-50 ">
      <div className="mx-auto max-w-[92rem] py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                كيف ستكون رحلتك مع نظام مبشر ؟
              </h2>
              <p className="mt-4 text-gray-500">
                تواصل مع فريق المبيعات لطلب نظام مبشر واحصل على QR منيو إلكتروني
                مُخصّص بهوية مطعمك، وتلقى أنت وفريقك التدريب اللازم لإدارته
                بسهولة.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
