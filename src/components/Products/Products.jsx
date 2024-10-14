import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/blue-label.png"
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Blue Lable",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img1,
    title: "Blue Lable",
    price: "120",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img1,
    title: "Blue Lable",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img1,
    title: "Blue Lable",
    price: "120",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body Section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
