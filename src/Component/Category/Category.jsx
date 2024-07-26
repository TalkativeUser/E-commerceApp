import React, { useEffect } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import styles from './Category.module.css'

export default function Category() {


  async function getAllCategories() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  const { isLoading, isError, isFetching, data, refetch } = useQuery( "allCategories", getAllCategories,{ enabled: true, });

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

<div className="container">

<div className="row py-5 g-5">
          {data?.data.data.map(function (category, ind) {
            return (
              <div key={ind} className="col-md-4">
                <div className={`${styles.category} p-3`}  >

                    <img
                      src={category.image}
                      className="w-100 py-5 "
                      alt="category"
                      height={'400px'}
                    />
                    <h6 className=" main-color  ">{category.name}</h6>
                    {/* <h5>{category._id}</h5> */}
                    <Link to={`CategoryDetails/${category._id}`} > 
                    <div className=" text-center p-2 border-white main-bgcolor w-100 rounded-2  p-1 mt-2 ">click here to more details </div>
                  </Link>
          
                </div>
              </div>
            );
          })}
        </div>
</div>

</>

 
  )
}


