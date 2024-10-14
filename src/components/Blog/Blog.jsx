import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blue-label.png";

const BlogData = [
  {
    title: "How to choose perfect booze",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    published: "Jan 20, 2024 by Karim",
    image: Img1,
  },
  {
    title: "How to choose perfect booze",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    published: "Jan 20, 2024 by Karim",
    image: Img1,
  },
  {
    title: "How to choose perfect booze",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    published: "Jan 20, 2024 by Karim",
    image: Img1,
  },
];

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />
        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data, index)=>(
            <div key={index+1} className="bg-white dark:bg-gray-900">
                {/*image section  */}
                <div className="overflow-hidden rounded-2xl mb-2">
                    <img src={data.image} alt="" className="w-full h-[220px] object-contain bg-slate-700 rounded-2xl hover:scale-105 duration-300" />
                </div>
                {/* Content section */}
                <div className="space-y-2">
                    <p className="text-xs text-gray-500">{data.published}</p>
                    <p className="font-bold line-clamp-1">{data.title}</p>
                    <p className="line-clamp-2 text-sm text-gray-600">{data.subtitle}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
