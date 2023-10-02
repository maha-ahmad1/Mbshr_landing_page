const features = [
  {
    symbol: "+M",
    label: "مستخدمين ",
    number: "15",
  },
  {
    symbol: "+M",
    label: "مستخدمين ",
    number: "10",
  },
  {
    symbol: "+K",
    label: "طلبات",
    number: "600",
  },
  {
    symbol: "+K",
    number: "300",
    label: "مطاعم",
  },
];

export default function Numbers() {
  return (
    <div className="p-4 rounded-3xl text-center my-20 lg:mx-48 border-2 border-[#250D61] shadow-lg py-10 bg-[#250D61] ">
      <h2 className="text-4xl font-semibold mb-4 text-white ">
        الأرقام لا تكذب!
      </h2>

      <p className="text-white text-2xl ">في الواقع، لقد أظهروا مدى كفاءتنا</p>

      <div className="sm:flex sm:flex-row lg:space-x-6 mt-20 lg:mx-10 ">
        {features.map((statistic, index) => (
          <div
            key={index}
            className="flex sm:flex-col items-center w-full lg:w-1/4 px-4 lg:px-0"
          >
            <div className="flex sm:flex-row font-bold text-white mb-4 ">
              <p className="text-3xl mt-2 ">{statistic.symbol}</p>
              <p className="text-5xl font-bold"> {statistic.number}</p>
            </div>
            <div className="text-white text-2xl ">{statistic.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
