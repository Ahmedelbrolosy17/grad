"use client";
import { FaWallet, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

const Finance = () => {
  const metrics = [
    { title: "Total Revenue",  value: "$5,000", Icon: FaChartLine   },
    { title: "Total Expenses", value: "$2,000", Icon: FaMoneyBillWave },
    { title: "Net Profit",     value: "$3,000", Icon: FaWallet       },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center mb-6">
        <FaWallet className="text-gray-600 text-3xl mr-3" />
        <h1 className="text-2xl font-semibold text-gray-800">Finance</h1>
      </header>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {metrics.map(({ title, value, Icon }) => (
          <div
            key={title}
            className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">
              <Icon className="text-gray-500 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
            <span className="text-2xl font-bold text-gray-500">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;
