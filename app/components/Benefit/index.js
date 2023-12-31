import React from "react";


const incentives = [
  {
    name: "زيادة المبيعات",
    description:
      "يمكنك مع المنيو الالكتروني معرفة ما يفضله الزبائن وسلوكهم ورغباتهم وعليه يمكنك هندسة المنيو وتقديم وجبات مميزة تناسب رغباتهم.     ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "تحسين تجربة الزبائن",
    description:
      "قم بتخصيص المنيو بما يناسب علامتك التجارية والتعديل عليه بسهولة تامة، كما أنه يساعدك في تحسين تجربة الطلب والدفع داخل المطعم.",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "تقليل التكاليف ",
    description:
      "المنيو الالكتروني يقلل من مهام للنادل بنسبة  75%  وهو ما يعني تقليل التكاليف التشغليلة داخل المطعم والحاجة لعدد من مقدمي الطعام. ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "تحسين الاستراتيجيات التسويقية ",
    description:
      "زيادة المتابعين على منصات التواصل ورفع كفاءة الاستهداف للزبائن بناء على تحليل بيانات الزبائن وامتلاك معرفة افضل لسلوكهم.     ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
  },
];

export default function Benefit() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center mb-16">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            فوائد المنيو الالكتروني
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-6 text-[25px] font-bold text-gray-900">
                {incentive.name}
              </h3>
              <p className="mt-2 text-lg text-gray-500">
                {incentive.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
