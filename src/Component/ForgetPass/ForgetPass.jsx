import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Bars } from 'react-loader-spinner';

export default function ForgetPAass() { 

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading]=useState(false)

  async function handleSubmit(values) {
    setIsLoading(true)

    const { data } = await axios
    .post(
      "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
      values
    )
    .catch((err) => {
      setError(err.response.data.message);
      setIsLoading(false)
    });

    if (data.statusMsg === "success") {
      navigate("/VerificationCode");
    }

   


   }

   const validationSchema = Yup.object({
    email: Yup.string()
      .required("This field is required")
      .email("Enter a valid email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return <>
  <div className="forgetpassword container py-5">
     <Helmet>
       <meta charSet="utf-8" />
       <title>Forget Password</title>
     </Helmet>
     {error ? (
       <div className="alert alert-danger mb-3 p-2 text-center">{error}</div>
     ) : null}
     <h3 className="mb-4"> please enter your email for send to you verification code </h3>
     <form onSubmit={formik.handleSubmit}>
       <div className="form-group mb-2">
         <label htmlFor="email" className="mb-1">
           Email:
         </label>
         <input
           className="form-control"
           type="email"
           id="email"
           name="email"
           value={formik.values.email}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
         />
         {formik.errors.email && formik.touched.email ? (
           <div className="alert alert-danger mt-2 p-2">
             {formik.errors.email}
           </div>
         ) : null}
       </div>
       <button
         type="submit"
         className="btn bg-success text-white px-5 mt-4 d-block ">
                {  isLoading?<Bars
          height="40"
          width="90"
          color="white"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /> : 'Send'}
       </button>
     </form>
   </div></>
}




