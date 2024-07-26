import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Bars, ColorRing } from "react-loader-spinner";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import './Brands.css'
import { useMemo } from "react";
import ParticlesComponent from "../particles";


export default function Brands() {



  function getAllBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  const { isLoading, isError, data } = useQuery( "getAllBrands", getAllBrands);

  const options = useMemo(
    () => (  
      
      
      
      {
      background: {
        color: {
          value: "#ffffff",
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
          value: "#000000",
        },
        links: {
          color: "#000000",
          distance: 150,
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
        <title> getAllBrands </title>
        <meta
          name=" All Brands"
          description="this component for get All Brands "
        />
      </Helmet>  


      <ParticlesComponent id="particles" options={options} />

      <div className="container">
      <div className="row">
          {data?.data.data.map(function (A_brand, ind) {
            return ( <>
            
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mb-5 " >
                    <div className="innerBrand pb-2 " >
                    <img src={A_brand.image} alt="image brand" className="w-100" />
                                <h6 className="mt-2 text-center" >{A_brand.name}</h6>
                    </div>

            </div>
            
            </>
        
            );
          })}
        </div>
       
      </div>
    </>
  );
}
