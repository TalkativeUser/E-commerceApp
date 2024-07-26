import axios from 'axios'
import React, { useContext, useState } from 'react'
import { ColorRing, Bars } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { cartContext } from '../context/cartContext'
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet'
import './productDetails.css'

export default function ProductDetails() {

  const { addProductToCart } = useContext(cartContext)
  const { id } = useParams()
  const [sending,setSending ] = useState(false)

  async function addProduct(id) {

setSending(true)

    const res = await addProductToCart(id)

try {
  if (res.status === 'success') {

    toast.success(res.message, {
      duration: 2000

    })

  }
  
} catch (error) {

  toast.error('errorHappend')

}



    setSending(false)
  }

  function getProductDetails() {

    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }

  const { isLoading, data } = useQuery('getProductDetails', getProductDetails)

  if (isLoading) {
    return <div className="vh-100  d-flex justify-content-center align-items-center">

      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperclassName="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />

    </div>
  }


  return <>

        <div className='productDetails ' >
    <div className="container">


      <div className="row align-items-center">

        <div className="col-md-3">


          <figure>

            <img className='w-100' src={data.data.data.imageCover} alt={data.data.data.title} />
          </figure>
        </div>

        <div className="col-md-9">

        <Helmet>
      <title>{data.data.data.title.split(' ').slice(0,2).join(' ')} </title>
      <meta
        name="all products"
        description="this component for all products "
      />
    </Helmet>
          <div className="details text-center ">

            <h1>{data.data.data.title}</h1>
            <p>{data.data.data.description}</p>
            <h5> Price :  {data.data.data.price} EGP </h5>
            <div onClick={() => { addProduct(data.data.data.id) }} className="w-100 main-bgcolor p-3 rounded-3 border-white text-white "> 
            
            
            {sending ? <Bars
                  height="40"
                  width="40"
                  color="#fff"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                /> : '+Add Cart'}
            
            
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>

  </>


}


