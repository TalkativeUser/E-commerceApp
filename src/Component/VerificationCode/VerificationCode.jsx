import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Bars } from 'react-loader-spinner';


export default function Verificationcode() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading]=useState(false)

  async function handleSubmit(values) {
    setIsLoading(true)

try {
  const { data } = await axios
  .post(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    values
  )

if (data.status === "Success") {
  navigate("/ResetPassword");
}
  
} catch (error) {

  console.log(error);
  setError(error.response.data.message);

  
}
setIsLoading(false)

  }

  const validationSchema = Yup.object({
    resetCode: Yup.string()
      .required("This field is required")
      .matches(/^[0-9]{3,10}$/, "Enter numbers only"),
  });

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return<>
   <div className="resetcode p-5 container ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Verification Code</title>
      </Helmet>
      {error ? (
        <div className="alert alert-danger mb-3 p-2 text-center">{error}</div>
      ) : null}
      <h2 className="mb-4">Verification Code</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="resetCode" className="mb-1">
            we sended Verification code to you for Verification please go to your email and get the verifyResetCode and type here:
          </label>
          <input
            className="form-control"
            type="text"
            id="resetCode"
            name="resetCode"
            placeholder='enter Verification code'
            value={formik.values.resetCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.resetCode && formik.touched.resetCode ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.resetCode}
            </div>
          ) : null}
        </div>
        <button
          disabled={!(formik.isValid && formik.dirty)}
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
    </div>
  
  </>
}
