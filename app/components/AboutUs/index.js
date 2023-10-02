import React from "react";
export default function About() {
  return (
      <div className="mx-auto max-w-[92rem] py-24 sm:px-2 sm:py-32 lg:px-4 lg:mr-10 ">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                ما هو المنيو الالكتروني؟{" "}
              </h2>
              <p className="mt-4 text-gray-900 text-xl w-[70%] ">
                يعتبر بديل مثالي للمنيو الورقي وهو نظام الكتروني يتم من خلاله
                عرض قائمة الطعام داخل المطاعم والمقاهي والفنادق بحيث يمكن
                للزبائن الطلب من خلال مسح الكود على الطاولة والدفع من الطاولة
                بسهولة تامة.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
