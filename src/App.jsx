import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/blue-label.png";
import Products from "./components/Products/Products";
import Blog from "./components/Blog/Blog";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Img1,
  title2: "Old Money",
  title3: "Winter Sale",
  title4:
    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
  bgColor: "#1376f4",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Img1,
  title2: "Old Money",
  title3: "Winter Sale",
  title4:
    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [openPopup, setPopup] = useState(false);
  const handleOrderPopup = () => {
    setPopup(!openPopup);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-since",
      delay: 100,
      offset: 100,
    });
    AOS.refresh()
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} handleOrderPopup={handleOrderPopup} />
      <Products />
      <Banner data={BannerData2} />
      <Blog />
      <Partners />
      <Footer />
      <Popup openPopup={openPopup} setOpenPopup={setPopup} />
    </div>
  );
};

export default App;
