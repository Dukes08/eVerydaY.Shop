import React from "react";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="text-gray-500 mt-4">Made With 🚀 by Byte Services</p>
            <a
              href="#"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Byte Services,C.A
            </a>
          </div>
          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-white/70 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-white/70 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Caracas, Torre Tamanaco</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+58 4122417654</p>
                </div>
                <h1 className="text-xl font-bold sm:text-left mb-3">Social links</h1>
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl hover:text-primary duration-200"/>
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl hover:text-primary duration-200"/>
                    </a>
                    <a href="#">
                        <FaGithub className="text-3xl hover:text-primary duration-200"/>
                    </a>
                </div>
              </div>
            </div>
          </div>
          {/* fourth column */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
