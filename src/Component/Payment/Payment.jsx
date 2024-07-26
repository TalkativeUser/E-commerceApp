import axios from "axios";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import toast from "react-hot-toast";

export default function Payment() {

   const {cartId,getUserCart,setCartProducts, setTotalCartPrice,setNumOfCartItems}= useContext(cartContext)

   async function confirmOnlinePayment() {
    const phoneValue = document.querySelector("#phone").value;
    const cityValue = document.querySelector("#city").value;
    const detailsValue = document.querySelector("#details").value;

    const shippingAddress = {
      shippingAddress: {
        'details': detailsValue,
        'phone': phoneValue,
        'city': cityValue,
      },
    };


try {
  const{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,shippingAddress,

  {
  
  headers:{token:localStorage.getItem('tkn')},
  params:{url:'http://localhost:3000/'}
  
  }
  
  
  )

  if(data.status==='success') {

    toast.success('order successfully initialzed')
    setCartProducts([])
    setTotalCartPrice(0)
    setNumOfCartItems(0)
}

else {

    toast.error('error on creating order')
}



  window.open(data.session.url,"_blank")
  // console.log(data);
}    


      catch (error) {
  console.log(error);
}


   }


  async function confirmCashPayment() {
    const phoneValue = document.querySelector("#phone").value;
    const cityValue = document.querySelector("#city").value;
    const detailsValue = document.querySelector("#details").value;

    const shippingAddress = {
      shippingAddress: {
        'details': detailsValue,
        'phone': phoneValue,
        'city': cityValue,
      },
    };


try {

    const {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,shippingAddress,{
        headers:{token:localStorage.getItem('tkn')}


   }
  
 )

 console.log(data);
if(data.status==='success') {

    toast.success('order successfully initialzed')
    setCartProducts([])
    setTotalCartPrice(0)
    setNumOfCartItems(0)
}

else {

    toast.error('error on creating order')
}
    
} catch (error) {
    console.log(error);
    
}


}

  return (
    <div className="container">


      <form>
        <label htmlFor="phone">Phone :</label>
        <input
          className="mb-3 form-control"
          type="tel"
          name="phone"
          id="phone"
        />

        <label htmlFor="city">City :</label>
        <input
          className="mb-3 form-control"
          type="text"
          name="city"
          id="city"
        />
        <label htmlFor="details">Details :</label>
        <textarea
          className="mb-3 form-control"
          type="text"
          name="details"
          id="details"
        ></textarea>

        <button type="button " onClick={confirmCashPayment} className="btn btn-warning me-3"> Confirm Cash Payment </button>
        <button type="button" onClick={confirmOnlinePayment} className="btn btn-primary"> Confirm Online Payment </button>


      </form>
    </div>
  );
}
