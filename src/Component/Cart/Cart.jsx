import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import {ColorRing} from 'react-loader-spinner'
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export default function Cart() {
  const { removeCartData,updateCount,cartProducts,totalCartPrice,numOfCartItems ,deleteCart} = useContext(cartContext);
 async function updateElementCount (id,count){

 const res= await updateCount(id,count)

if(res.status==='success') {
    toast.success('update successfully')

}


else {

  toast.error('error on updating')
}


}

async function deleteCartt () {

  await removeCartData()
 }

  async function deleteProduct(id) {

            const res =  await deleteCart(id)
            if(res.status==='success')
            toast.success('product removed succesfully')
          else{
            toast.error('Error occurred')
          }

     }

     if (cartProducts===null )  {
      
// console.log( 'from if condition cart products', cartProducts);
      // return <div className="vh-100  d-flex justify-content-center align-items-center">
        
      //                     <ColorRing
      //                       visible={true}
      //                       height="80"
      //                       width="80"
      //                       ariaLabel="blocks-loading"
      //                       wrapperStyle={{}}
      //                       wrapperclassName="blocks-wrapper"
      //                       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      //                     />

      //                     </div>

      return  <div className="mt-5 overflow-hidden pt-5 ">

      <div style={{backgroundColor:"rgb(208 235 207)"}} className="container rounded-5 py-5 mt-5 w-75 " >  
  
      <h4 className="text-center" >There is not any  order please go to  <Link to={'/products'} style={{color:"#0000ff87"}} >products page </Link> for create order</h4>
      </div>
  </div>
     }
 

  
     console.log( 'from if condition cart products', cartProducts);
  return (
    <>
      <div style={{backgroundColor:'#eee'}} className="container py-5" >
        <h2>Shop Cart: </h2>
        <h5>total price : {totalCartPrice} </h5>
        <h6>num Of Cart Items : {numOfCartItems} </h6>
        <div className="d-flex justify-content-between align-items-center ">
                <button onClick={ ()=>{ deleteCartt() } } className="btn btn-outline-danger" > Clear All Carts </button>
                <Link to={'/payment'} className="btn btn-outline-primary" > Confirm </Link>
        </div>


        { cartProducts.map( (product,index )=>{  return  <div key={index} className="row my-2 border-bottom border-3 p-2 align-items-center ">
      
                  <div className="col-sm-1">


                      <img className="w-100" src={product.product.imageCover}alt="" />
                  </div>

                  <div className="col-sm-9">
                        <h2 className="h6" >Title {product.product.title} </h2>
                        <h5 className="h6">Price : {product.price}</h5>
                        <button onClick={()=>deleteProduct(product.product.id)} className="btn btn-outline-danger" >Remove</button>
                  </div>

                  <div className="col-sm-2">
                      <div className="d-flex align-items-center ">

                        <button onClick={ ()=> updateElementCount(product.product.id,product.count+1) } className="btn btn-outline-success">+</button>
                        <span className="mx-2" >{product.count}</span>
                        <button onClick={ ()=> updateElementCount(product.product.id,product.count-1) } className="btn btn-outline-success">-</button>

                      </div>
                    
                  </div>

</div> } ) 

}

      </div>
    </>
  );
}


