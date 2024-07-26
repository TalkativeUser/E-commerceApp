import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cartContext } from '../../context/cartContext';
import toast from 'react-hot-toast';
import { Bars } from 'react-loader-spinner';
import './products.css'



export default function ChildProduct(props) {
    const { addProductToCart,addProductToWishlist,removeProductfromWishlist } = useContext(cartContext);
    const product=props.product;
    let deffrantChild=props.addWish;
  
    const [addWish,setAddWish]=useState( localStorage.getItem(deffrantChild)==='true')  
   const [isLoadingBtn,setIsLoadingBtn]=useState(false)
   const [isRemoved,setIsRemoved]=useState(false)

    async function addProduct(id) {
 
        try {
          const res = await addProductToCart(id);
    
          if (res.status === "success") {
            toast.success(res.message, {
              duration: 2000,
            });
          } 
          
        } catch (error) {
          // toast.error('error hapend');
    // console.log('add product ====>', error);
          
        }
        
     
      }
    
      async function addWishlist ( id) {

          setIsLoadingBtn(true)
        try {
          await addProductToWishlist(id)
        setAddWish(true)
        localStorage.setItem(deffrantChild, true); } catch (error) {
          console.log(error);
          
        }

        setIsLoadingBtn(false)
    
      }
     const removeWishlistProduct=  async ( id)=> {

        setIsRemoved(true)
        try {
         
          const result=await removeProductfromWishlist(id)
          if(result.status==='success') {
            setAddWish(false)
            localStorage.setItem(deffrantChild,false)

          }
        
        } catch (error) {
          console.log( error);
          
        }

    setIsRemoved(false)
      }

      const productTitle=product.title.split(" ").slice(0, 2).join(" ");

  return (
    
 
          <div  className="col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
          
                <div className="product">
                  <Link to={`/ProductDetails/${product.id}`}>

               <div className='my-5 parent_borderRotate' >
                    <img
                          src={product.imageCover}
                          className="w-100 image_borderRotate "
                          alt="product"
                        />

               </div>
                    <h5 className='text-center'  >{productTitle.length>9?productTitle.slice(0, 9)+'...':productTitle}</h5>
                    <div className="d-flex justify-content-between align-items-center flex-column ">
                      <p>{product.price}EGP</p>

                      <p>
                        {" "}
                        <span>
                          <i className="fa-solid fa-star text-warning"></i>
                        </span>{" "}
                        {product.ratingsAverage}
                      </p>
                    </div>
                  </Link>
                  <button  style={{border:"none"}}
                    onClick={() => addProduct(product.id)}
                    className="bg-white overflow-hidden w-100 rounded-2  p-1 mt-2 rotateInCart "
                  >
                   <p className='m-0 p-0' > + Add to Cart</p>



                  </button>

                  {addWish?   <button style={{border:"none"}}
                              onClick={() =>{ removeWishlistProduct(product.id)}}
                                className=" border-white w-100 rounded-2 bg-white overflow-hidden text-white p-1 mt-2 rotateInRemoveWish"
                              >
                                   {isRemoved?<Bars
                                          height="25"
                                          width="90"
                                          color="white"
                                          ariaLabel="bars-loading"
                                          wrapperStyle={{}}
                                          wrapperClass=""
                                          visible={true}
                                        />: <p className='m-0 p-0' > Remove from Wishlist</p>
                                      }         
                              </button>
                                  :  <button
                    onClick={() =>{addWishlist(product.id)}}
                     style={{backgroundColor:"#929be79c",border:"none"}} className="w-100 rounded-2 bg-white rounded-2 overflow-hidden  p-1 mt-2 rotateInAddWish"
                  >
                        {isLoadingBtn?<Bars
                                          height="25"
                                          width="90"
                                          color="white"
                                          ariaLabel="bars-loading"
                                          wrapperStyle={{}}
                                          wrapperClass=""
                                          visible={true}
                                        />: <p className='m-0 p-0' > + Add to Wishlist</p>
                                      }
                  </button>}
          
                </div>
              </div>
   
  )
}



