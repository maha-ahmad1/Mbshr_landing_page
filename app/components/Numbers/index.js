import { features } from "store/app/data/constants/features";
export default function Numbers() {
  return (
    <div className="p-4 rounded-3xl text-center my-20 lg:mx-48 border-2 border-[#250D61] shadow-lg py-10  bg-[#250D61] ">
      <h2 className="text-4xl font-semibold mb-4 text-white ">
        الأرقام لا تكذب!
      </h2>

      <p className="text-white text-2xl ">في الواقع، لقد أظهروا مدى كفاءتنا</p>

      <div className="flex space-x-6 mt-20  ">
        {features.map((statistic, index) => (
          <div key={index} className="flex-1 text-center">
            <div className="flex font-bold text-white mb-4 mr-28">
              <span className="text-4xl font-normal mt-4 ">{statistic.symbol}</span>
              <p className="text-6xl"> {statistic.number}</p>
            </div>
            <div className="text-white text-2xl ">{statistic.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
