import { features } from "store/app/data/constants/features";

export default function Numbers() {
    return (
        <div className="p-4 rounded-lg text-center my-20 lg:mx-48 border-2 border-[#250D61] shadow-lg py-10  bg-[#250D61] ">
          <h2 className="text-4xl font-semibold mb-4 text-white ">لماذا تختارنا ؟</h2>
          {features.map((feature, index) => (
            <p key={index} className="text-white ">
              {feature.paragraphs}
            </p>
          ))}
          <div className="flex space-x-6 mt-20  ">
            {features.map((statistic, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-3xl font-bold text-white ">{statistic.number}</div>
                <div className="text-white ">{statistic.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };