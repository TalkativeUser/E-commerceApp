import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import ParticlesComponent from "../particles";
export default function AllOrders() {
  const [userOrders, setUserOrders] = useState(null);
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

  useEffect(() => {
    const res = jwtDecode(localStorage.getItem("tkn"));
    // setUserId(res.id)
    getUserOrders(res.id);
  }, []);

  async function getUserOrders(id) {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
      );
      console.log(data);
      setUserOrders(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (userOrders === null) {
   

      
    return   <div className="vh-100  d-flex justify-content-center align-items-center">
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
 
  }

  if(userOrders.length==0) {

    return <>  
    
    <ParticlesComponent id="particles" options={options} />

    
  

            <div className="container rounded-5 vh-100 " style={{display:"flex",alignItems:"center",justifyContent:"center"}}  >  

            <h4 className="text-center text-white " >There is not any  orders please go to  <Link to={'/cart'} style={{color:"#936b6b"}} >cart page </Link> for create one</h4>
            </div>
    </> 
  }

  

  return (
    <div className="container">
      <div className="row g-4">
        {userOrders.map((order, index) => {
          return (
            <div key={index} className="col-md-6">
              <div className="order p-3 bg-info rounded-4">

                <div className="container">

                    <div className="row">

                        
                {  order.cartItems?.map( (item,idx)=> {

                    return <div key={idx} className="col-sm-4">

                            <div className="bg-danger my-2" >
                                <img className="w-100" src={item.product.imageCover} alt={item.product.title} />
                                <h6>   title {item.product.title.split(' ').slice(0,2).join(' ')}         </h6>
                            <h5>count : {item.count}</h5>
                            <h5>price : {item.price}</h5>


                            </div>
                    </div>


                       } )

                }

                    </div>
                </div>


                <p>order sent to user with phone {order.shippingAddress.phone} 
                and with details {order.shippingAddress.details} at {order.shippingAddress.city}
                
                </p>

                <h5>paymenyMethod :{order.paymentMethodType}</h5>
                <h5>total Order Price :{order.totalOrderPrice}</h5>

              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
}
