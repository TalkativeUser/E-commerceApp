import React, { useContext, useEffect, useState } from "react";
import { autContext } from "../../context/authencontext";
import axios from "axios";
import { Bars, ColorRing } from "react-loader-spinner";
import { useQuery } from "react-query";
import HomeSlider from "../../HomeSlider/HomeSlider";
import CategeorySlider from "../../CategeorySlider/CategeorySlider";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import ChildProduct from "./ChildProduct";
import './products.css'

export default function Products() {



  function getAllProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  const { isLoading, isError, data } = useQuery( "allProduct", getAllProducts);


  if (isLoading) {
    return (
      <div className="vh-100  d-flex justify-content-center align-items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperclassName="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title> AllProducts </title>
        <meta
          name="all products"
          description="this component for all products "
        />
      </Helmet>
<div className="whiteGradiant" >

      <div className="container pt-5 "  >
        <div className="row  gx-0 mb-5">
          <div className="col-sm-9">
            <HomeSlider />
          </div>
          <div className="col-sm-3">
            <img
              style={{ width: "100%", height: "200px" }}
              src={require("../../images/grocery-banner-2.jpeg")}
              alt="slider"
            />
            <img
              style={{ width: "100%", height: "200px" }}
              src={require("../../images/grocery-banner.png")}
              alt="slider"
            />
          </div>
        </div>
        <CategeorySlider />
        {/* <div className="btn btn-success w-100 " onClick={refetch}>AddProduct....</div> */}
        <div className="row py-5">
          {data?.data.data.map(function (product, ind) {
            return (
          <ChildProduct key={ind} product={product} addWish={'addWish'+product.id}  />
          
            );
          })}
        </div>
      </div>

      </div>
    </>
  );
}
