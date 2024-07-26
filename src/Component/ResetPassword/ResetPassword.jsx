import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Bars } from 'react-loader-spinner';


export default function ResetPassword() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading]=useState(false)
  async function handleSubmit(values) {
    setIsLoading(true)

try {
  const { data } = await axios
  .put(
    "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    values
  )
  console.log(data);
  localStorage.setItem('tkn',data.token)

  navigate("/Login");

  
} catch (error) {

  console.log( 'Reset password===>',error);
  setError( error.response.data.message);

  
}

setIsLoading(false)


  }

  const validationSchema = Yup.object({
    email: Yup.string()
    .required("This field is required")
      .email("Enter a valid email"),
      newPassword:Yup.string().required('this field is required').max(30 ,' you should write the password less than 30 charctars' ).min(6,'you should write the password big than 6 charctars')
  });

  const formik = useFormik({
    initialValues: {
        "email":"",
        "newPassword": ""
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return<>
   <div className="resetcode p-5 container ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
      </Helmet>
      {error ? (
        <div className="alert alert-danger mb-3 p-2 text-center">{error}</div>
      ) : null}
      <h2 className="mb-4">Reset your Password Code</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
              className="form-control " placeholder='enter your email for reset password'  type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.email}
            </div>
          ) : null}
          <label htmlFor="newPassword" className="mb-1 mt-4">
          New Passowrd:
          </label>
          <input
              className="form-control  " placeholder='enter your New Password for reset password'  type="text" id="newPassword" name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.newPassword && formik.touched.newPassword ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.newPassword}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn bg-success text-white px-5 mt-5">
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
    </div>
  
  </>
}
