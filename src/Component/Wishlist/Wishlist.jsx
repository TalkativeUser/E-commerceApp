import React, { useContext, useState } from "react";
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
import ChildWishlist from "../ChildWishlist/ChildWishlist";
import { useQueryClient } from 'react-query';
import ParticlesComponent from "../particles";
import '../SubCategory/SubCat.css'
import { useMemo } from "react";

export default function Wishlist() {
const { addProductToCart ,removeProductfromWishlist,wishlistAllProducts} = useContext(cartContext);
const [isDeleted,setIsDeleted]=useState(false)
const queryClient = useQueryClient();

const options = useMemo(
  () => (  
    
    
    
    {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 190,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#FF0000",
      },
      links: {
        color: "#FFFFFF",
        distance: 350,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: true,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }  




),
  [],
);


async function getWishlistAllProducts () {

  try {
    const res = await wishlistAllProducts();
    console.log(res);

    return res;
    
  } catch (error) {
    toast.error('error hapend');
console.log('add product ====>', error);
    
  }
}

function forReRender () {

  setIsDeleted(!isDeleted)
  queryClient.invalidateQueries('getWishlistAllProducts'); // إعادة جلب البيانات عند الحاجة

}


  const { isLoading, isError, data } = useQuery( "getWishlistAllProducts", getWishlistAllProducts);


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

  // console.log(data.data.data);
  
  if(data?.data.data.length==0) {

    return  <> <div>  
    
    <ParticlesComponent id="particles" options={options} />

    
  

            <div className="container rounded-5 vh-100 " style={{display:"flex",alignItems:"center",justifyContent:"center"}}  >  

            <h4 className="text-center text-white " >There is not any  product please go to  <Link to={'/products'} style={{color:"#936b6b"}} >products page </Link> for add products to here</h4>
            </div>
    </div> </>
  }


  return (
    <div className="whiteGradiant">
      <Helmet>
        <title> Wishlist AllProducts </title>
        <meta
          name="all products"
          description="this component for all products "
        />
      </Helmet>


      <div className="container py-5  ">

<div className="row">
  {data?.data.data.map(function (product, ind) {
    return (
    <ChildWishlist  key={ind} index={ind} product={product} forReRender={forReRender} />
    );
  })}
</div>
</div>
     
    </div>
  );
}
