import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Bars } from 'react-loader-spinner';

export default function ChildWishlist(props) {

    const { addProductToCart ,removeProductfromWishlist,wishlistAllProducts,allDeffrentChild} = useContext(cartContext);
    const [isDeleted,setIsDeleted]=useState(false)

      const product=props.product;
      const forReRender=props.forReRender
      const myIndex=props.index;

    async function addProduct(id) {
 
        try {
          const res = await addProductToCart(id);
      
          if (res.status === "success") {
            toast.success(res.message, {
              duration: 2000,
            });
          } 
          
        } catch (error) {
          toast.error('error hapend');
      console.log('add product ====>', error);
          
        }
        
      
      }
      
      async function removeWishlist ( id) {

      setIsDeleted(true)
      
        try {
          const result=await removeProductfromWishlist(id)
          if(result.status==='success') {
            console.log('success');
          }
        
        } catch (error) {
          console.log( error);
          
        }
      
      setIsDeleted(false)
      forReRender()
      localStorage.setItem(`addWish${id}`,false)

      }
      




  return (
    <div  className="col-md-2">
    <div className="product">
      <Link to={`/ProductDetails/${product.id}`}>
      <div className='my-5 parent_borderRotate' >
                    <img
                          src={product.imageCover}
                          className="w-100 image_borderRotate "
                          alt="product"
                        />

               </div>
        <h5 className='text-center' >{product.title.split(" ").slice(0, 2).join(" ")}</h5>
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
        className="bg-white w-100 rounded-2  p-1 mt-2 rotateInCart  overflow-hidden"
      >
          <p className='m-0 p-0' > + Add to Cart</p>
      </button>
      
      <button style={{border:"none"}}
         onClick={() =>{ removeWishlist(product.id)}}
        className="bg-white text-white w-100 rounded-2  p-1 mt-2 rotateInRemoveWish overflow-hidden"
      >
        {isDeleted?<Bars
                                      height="25"
                                      width="90"
                                      color="white"
                                      ariaLabel="bars-loading"
                                      wrapperStyle={{}}
                                      wrapperClass=""
                                      visible={true}
                                    />: <p className='m-0 p-0' > Remove from wishList</p>}   
      </button>
    </div>
  </div>
  )
}
