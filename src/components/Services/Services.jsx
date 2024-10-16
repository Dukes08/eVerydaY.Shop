import React from "react";
import { FaCheckCircle, FaWallet } from "react-icons/fa";
import { FaBottleWater, FaCarSide } from "react-icons/fa6";
const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-brandBlue" />,
    title: "Free Shipping",
    description: "Free Shipping On All Orders",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-brandBlue" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-brandBlue" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaBottleWater className="text-4xl md:text-5xl text-brandBlue" />,
    title: "Excelent Booze",
    description: "Enjoy With Your Friends",
  },
];
const Services = () => {
  return (
    <div>
      <div className="container mt-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data, index) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div className="">
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
