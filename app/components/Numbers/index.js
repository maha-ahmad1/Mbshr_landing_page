import { features } from "store/app/data/constants/features";

export default function Numbers() {
    return (
        <div className="bg-white p-4 rounded-lg text-center my-20 sm:mx-36 ">
          <h2 className="text-4xl font-semibold mb-4 text-[#250D61]">لماذا تختارنا ؟</h2>
          {features.map((feature, index) => (
            <p key={index} className="text-gray-600 mb-2">
              {feature.paragraphs}
            </p>
          ))}
          <div className="flex space-x-6 mt-20 ">
            {features.map((statistic, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-3xl font-bold text-[#250D61]">{statistic.number}</div>
                <div className="text-gray-500">{statistic.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };