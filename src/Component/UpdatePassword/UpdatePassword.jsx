import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Bars } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function UpdatePassword() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading]=useState(false)
 
  async function handleSubmit(values) {
    setIsLoading(true)

try {
  const token= localStorage.getItem('tkn')

  const { data } = await axios
  .put(
    "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
    values,{ headers :{token}}
    
  )

  if(data.message==='success') {

    // localStorage.setItem('tkn',data.token)
    console.log('from update my password ==> ',data);
toast.success('Changed password success , sholud you  login again for verification new password',{ duration: 3000,})
setTimeout(()=>{  navigate('/login') },3000)

  }

  
} catch (error) {

  console.log( 'Reset password===>',error.response.data.errors.msg);
  setError(`${error.response.data.errors.msg} , please enter your a valid current password `);
 

  
}

setIsLoading(false)


  }

  const validationSchema = Yup.object({

    currentPassword:Yup.string().required('this field is required'),
    password:Yup.string().required('this field is required'),
    rePassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Passwords must match')
    
    
      
    
    


  });

  const formik = useFormik({
    initialValues: {
        "currentPassword":"",
        "password": "",
        "rePassword": ""
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
   
      <h2 className="mb-4">Reset your Password Code</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="email" className="mb-1">
            currentPassword:
          </label>
          <input
              className="form-control " placeholder='enter your current password for updating password'  type="text" id="currentPassword" name="currentPassword" value={formik.values.currentPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.currentPassword && formik.touched.currentPassword ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.currentPassword}
            </div>
          ) : null}
          <label htmlFor="password" className="mb-1 mt-4">
          New Passowrd:
          </label>
          <input
              className="form-control  " placeholder='enter your New Password for update password'  type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.password}
            </div>
          ) : null}
          <label htmlFor="rePassword" className="mb-1 mt-4">
          Re type new passowrd:
          </label>
          <input
              className="form-control  " placeholder='re type new passowrd for update password'  type="text" id="rePassword" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.rePassword}
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

        {error ? (<div>
          
                    <div className="alert alert-danger my-4 p-2 text-center">{error}    
                    
                          <Link className='mt-3 text-success px-5 ' to={'/ForgetPass'} >do you forget password ?</Link>
                    
                      </div>
        
                </div> ) : null}
      </form>
    </div>
  
  </>
}
