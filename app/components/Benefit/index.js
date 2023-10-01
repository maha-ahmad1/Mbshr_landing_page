import React from "react";
import { incentives } from "store/app/data/constants/Incentives";

export default function Benefit() {
  return (
    // <div className=" mt-20 mr-14 lg:mr-0 w-[30%]">
    //   <div className="mb-6">
    //     <h1 className="text-6xl mb-8 font-bold">الفوائد</h1>
    //     <ul className="list-disc">
    //       <li className="text-2xl">زيادة المبيعات</li>
    //       <p className="text-lg">
    //         يمكنك مع المنيو الالكتروني معرفة ما يفضله الزبائن وسلوكهم ورغباتهم وعليه يمكنك هندسة المنيو وتقديم وجبات مميزة تناسب رغباتهم.
    //       </p>
    //     </ul>
    //   </div>
    //   <div className="mb-6">
    //     <ul className="list-disc">
    //       <li className="text-2xl">تحسين تجربة الزبائن</li>
    //       <p className="text-lg">
    //         قم بتخصيص المنيو بما يناسب علامتك التجارية والتعديل عليه بسهولة تامة، كما أنه يساعدك في تحسين تجربة الطلب والدفع داخل المطعم.
    //       </p>
    //     </ul>
    //   </div>
    //   <div className="mb-6">
    //     <ul className="list-disc">
    //       <li className="text-2xl">تقليل التكاليف</li>
    //       <p className="text-lg">
    //         المنيو الالكتروني يقلل من مهام للنادل بنسبة 75% وهو ما يعني تقليل التكاليف التشغليلة داخل المطعم والحاجة لعدد من مقدمي الطعام.
    //       </p>
    //     </ul>
    //   </div>
    //   <div className="mb-6">
    //     <ul className="list-disc">
    //       <li className="text-2xl">رفع كفاءة الاستراتيجيات التسويقية</li>
    //       <p className="text-lg">
    //         زيادة المتابعين على منصات التواصل ورفع كفاءة الاستهداف للزبائن بناء على تحليل بيانات الزبائن وامتلاك معرفة أفضل لسلوكهم.
    //       </p>
    //     </ul>
    //   </div>
    // </div>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center mb-16">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
فوائد المنيو الالكتروني
            </p>
          </div>          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div key={incentive.name}>
                <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
                <h3 className="mt-6 text-[25px] font-bold text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-lg text-gray-500">{incentive.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
