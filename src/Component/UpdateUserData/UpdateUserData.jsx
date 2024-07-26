import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Bars } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function UpdateUserData() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading]=useState(false)
  const[navigator,setNavigator]=useState(false)
 
  async function handleSubmit(values) {
    setIsLoading(true)

try {
  const token= localStorage.getItem('tkn')

  const { data } = await axios
  .put(
    "https://ecommerce.routemisr.com/api/v1/users/updateMe/",
    values,{ headers :{token}}
    
  )

  if(data.message==='success') {

    console.log('from update logged user data',data);
    toast.success('Changed personal data success ',{ duration: 3000,})
    setError(false)
    setNavigator(true)

  }


  
} catch (error) {

  console.log( 'Reset password===>',error.response.data.errors.msg);
  setError(`${error.response.data.errors.msg} , please enter a valid data `);
 

  
}

setIsLoading(false)


  }

  const validationSchema = Yup.object({

    name:Yup.string().required('this field is required').max(30,'The maximum character limit is 30 characters ').min(6,'The minimum character limit is 6 characters'),
    email:Yup.string().required('this field is required').email('please enter a valid email'),
    phone: Yup.string().required('this field is Required').matches(/^(02)?01[0125][0-9]{8}$/,'please enter a valid phone number')
    
    
      
    
    


  });

  const formik = useFormik({
    initialValues: {
        "name":"",
        "email": "",
        "phone": ""
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return<>
   <div className="resetcode p-5 container ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>update Password</title>
      </Helmet>
   
      <h2 className="mb-4">update your personal data</h2>
      {error ? (<div>
          
          <div className="alert alert-danger my-4 p-2 text-center">{error}    
                              
            </div>

      </div> ) : null}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="name" className="mb-1">
            New name :
          </label>
          <input
              className="form-control " placeholder='enter your new name for updating personal data'  type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.name}
            </div>
          ) : null}
          <label htmlFor="email" className="mb-1 mt-4">
          New email :
          </label>
          <input
              className="form-control  " placeholder='enter your New email for update personal data'  type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.email}
            </div>
          ) : null}
          <label htmlFor="phone" className="mb-1 mt-4">
          New phone:
          </label>
          <input
              className="form-control  " placeholder='enter your New phone for update personal data'  type="text" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.phone}
            </div>
          ) : null}

        </div>

   

        <button
          type="submit"
          className="btn bg-success text-white px-5 mt-2">
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

        {navigator?
       <div> 
              <div className=" text-success mt-3 "> Personal data has been changed successfully ✅</div>
              <Link to={'/login'} >  <p className='btn btn-outline-info mt-3' >pleas click here to go to login page before any thing for verification new your personal data</p></Link>
     </div>:""}

    
      </form>
    </div>
  
  </>
}
