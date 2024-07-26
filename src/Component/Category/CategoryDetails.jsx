import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';

export default function CategoryDetails() {
    const { id } = useParams()

    async function getCategoryDetails() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
        // 6439d5b90049ad0b52b90048
      }
      const { isLoading, isError, isFetching, data, refetch } = useQuery( "getCategoryDetails", getCategoryDetails);
    
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
    return <>
    {console.log(console.log(id))}
{/* {console.log(' caaategoryDetails', data.data.data)} */}
    <div className="container py-5">


      <div className="row align-items-center ">

        <div className="col-md-3">


          <figure>

            <img className='w-100' src={data.data.data.image} alt={data.data.data.name} />
          </figure>
        </div>

        <div className="col-md-9">

          <div className="details text-center ">

            <h1> Category name : {data.data.data.name}</h1>
            <p> <span className='h3 me-3' >createdAt: </span> {data.data.data.createdAt}</p>
            <p> <span className='h3 me-3' >updatedAt :</span> {data.data.data.updatedAt}</p>
            
            
           
            
            
            </div>

          </div>

        </div>

      </div>
    


  </>

}
