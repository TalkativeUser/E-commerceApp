import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const cartContext = createContext();

export function CartContextProvider({ children }) {


  const [cartProducts,   setCartProducts  ] = useState(null);
  const [totalCartPrice, setTotalCartPrice] = useState(null);
  const [numOfCartItems, setNumOfCartItems] = useState(null);
  const [cartId,setCartId]=useState(null)



  async function wishlistAllProducts() {
    const token=localStorage.getItem('tkn')

    const res=await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers:{token:localStorage.getItem("tkn")} } );
    return res;
  }
  async function addProductToWishlist(productId) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist ",
        {
          productId: productId,
        },
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );

  console.log(data);
      return data;
    } catch (e) {
      toast.error('from add to wishlist===>', e);

    }
  }
  async function removeProductfromWishlist(productId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId} `,

        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );

  console.log(data);
  toast.success(data.message);

      return data;
    } catch (e) {
      toast.error('not removed product from wishlist===>', e);
      console.log(' not removed product from wishlist===>', e);

    }
  }
  async function addProductToCart(productId) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart ",
        {
          productId: productId,
        },
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );

      getUserCart()  
      // setNumOfCartItems(data.numOfCartItems);
      // setTotalCartPrice(data.data.totalCartPrice);
        // setCartProducts(data.data.products);

      return data;
    } catch (e) {
      // console.log("error : ", e.response.data.message);
      toast.error(e.response.data.message);

    }
  }

  async function deleteCart(productid) {
        
    try{
     const 
      {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,{
 
     headers:{
         token:localStorage.getItem('tkn')
     }
     })
     setNumOfCartItems(data.numOfCartItems)
     setTotalCartPrice(data.data.totalCartPrice)  
     setCartProducts(data.data.products)  
    
         return data;
 
    }
    catch(e){
     console.log('errors',e);
    }
 
 }
 
 async function updateCount(productid,count) {
  try{
    const {data}= await  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,{
    "count": count
},{
        headers: {token: localStorage.getItem('tkn')}
    })
   
    setTotalCartPrice(data.data.totalCartPrice)  
    setCartProducts(data.data.products)  
    setNumOfCartItems(data.numOfCartItems)
   

    
    return data

  }
  catch(e){
    console.log('errors',e);
   }
  } 

  async function removeCartData() {
    try{
        await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
            headers:{
                token:localStorage.getItem('tkn')
            }
        })
        setTotalCartPrice(0);
        setTotalCartPrice(0)
        setCartProducts([])
    }
    catch(e){
  console.log('errors',e);
    }
    
        
     }


  async function getUserCart() {
    try {
      const{data}=await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers:{token: localStorage.getItem("tkn")}
      });

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setCartProducts(data.data.products);
      setCartId(data.data._id)

    } catch (error) {
      console.log("error : not find any cart in your project  ");
    }
  }

  useEffect( function () {

getUserCart()

  }  )

  return (
    <>
      <cartContext.Provider
        value={{
          addProductToCart,
          cartId,
          cartProducts,
          totalCartPrice,
          numOfCartItems,
          getUserCart,
          deleteCart,
          updateCount,
          removeCartData,
          setCartProducts  ,
          setTotalCartPrice,
          setNumOfCartItems,
          addProductToWishlist,
          removeProductfromWishlist,
          wishlistAllProducts,
          
          
        }}
      >
        {children}
       
      </cartContext.Provider>
    </>
  );
}
