import React from "react";
import Button from "../Shared/Button";
import img1 from "../../assets/blue-label.png";
import img2 from "../../assets/buchanans.png";
import img3 from "../../assets/tequila-patron.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* first column */}
          <div className="col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="z-40">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Blue Label
                </p>
                <Button
                  text="Browse"
                  textColor="text-white"
                  bgColor="bg-primary"
                />
              </div>
            </div>
            <img
              src={img1}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
          {/* second column */}
          <div className="col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="z-40">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Buchanan
                </p>
                <Button
                  text="Browse"
                  textColor="text-brandBlue"
                  bgColor="bg-white"
                />
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
          {/* third column */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="z-40">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Blue Label
                </p>
                <Button
                  text="Browse"
                  textColor="text-brandYellow"
                  bgColor="bg-white"
                />
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
          {/* Second Row */}
          {/* first column */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="z-40">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Blue Label
                </p>
                <Button
                  text="Browse"
                  textColor="text-brandYellow"
                  bgColor="bg-white"
                />
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
          {/* second column */}
          <div className="col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-start">
            <div className="z-40">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Blue Label
                </p>
                <Button
                  text="Browse"
                  textColor="text-white"
                  bgColor="bg-primary"
                />
              </div>
            </div>
            <img
              src={img1}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
          {/* third column */}
          <div className=" col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start">
            <div className="z-40">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Buchanan
                </p>
                <Button
                  text="Browse"
                  textColor="text-brandBlue"
                  bgColor="bg-white"
                />
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
