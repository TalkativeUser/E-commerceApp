import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import '../Products/products.css'

export default function RenderAllData() {
    async function getDAta () {

        console.log('waiting get Data ...');
        return await axios.get(`http://localhost:8080/api/sub-category/1/products` )
    } 

    const { isLoading, isError, data } = useQuery( "getDAta", getDAta);

    console.log( 'sup cat data ==>', data?.data);
    if (isLoading) {
        return (
        <div className="vh-100  d-flex justify-content-center align-items-center">
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        </div>
        );
    }

    if(isError) {            console.log('hello from Render all data ==>',isError);}

//  console.log(data);

return (
<>
 
  <div className="container  "  >
 



    <div className="row py-5">
      {data?.data.map(function (productMap,ind) {

      

       return (
    
 
        <div  className="col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
        
        <Link to={''}  style={{textDecoration:"none"}} >

        <div className="product">

        <div className='my-5 parent_borderRotate' >
            <img 
            
                src={productMap.imgUrl}
                className="w-100 image_borderRotate "
                alt="product"
                style={{height:"170px"}}
                />

        </div >
    {/* <h5 className='text-center'  >{productMap.name.length>9?productMap.name.length.slice(0, 9)+'...':productMap.name.length}</h5> */}
      <p className='text-center' >{productMap.price}  EGP</p>

   
      <button  style={{border:"none"}}
  
    className={`bg-white overflow-hidden w-100 rounded-2  p-1 mt-2  rotateInCart `}
  >
   <p className='m-0 p-0' > + Add to Cart</p>



  </button>               


</div>

        </Link>
            
            </div>
 
)
      })}
    </div>
  </div>

  

</>
);
}
