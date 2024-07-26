import React, { useEffect } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import styles from '../Category/Category.module.css'
import './SubCat.css'
import ParticlesComponent from '../particles';
import { useMemo } from 'react';

export default function SubCategory() {


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


  async function getAllSubCategories() {
    return await axios.get("https://route-ecommerce.onrender.com/api/v1/subcategories");
  }
  const { isLoading, isError, isFetching, data, refetch } = useQuery( "getAllSubCategories", getAllSubCategories,{ enabled: true, });

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



  return (  <>   
<div className='subCategory' > 
<ParticlesComponent id="particles" options={options} />


<div className="container"  

>
{console.log(data)}
<div className="row py-5 g-5">
          {data?.data.data.map(function (category, ind) {
            return (
              <div key={ind} className="col-md-4" style={{backgroundColor:"none"}} >
                <div className={`${styles.category} p-5`}  >

                    <h3 className="text-white">{category.name}</h3>
                    <p className='text-white' >  <span className='me-3 h6 text-white ' >createdAt : </span> {category.createdAt}</p>
                    <p className='text-white' >  <span className='me-3 h6 text-white  ' >updatedAt : </span>  {category.updatedAt}</p>
                
          
                </div>
              </div>
            );
          })}
        </div>
</div>

          </div> 
</>

 
  )
}


