







import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function () {
  const[name,setName]=useState(null)

useEffect( ()=>{

  const x=jwtDecode(localStorage.getItem('tkn'))
  console.log(x);
 setName(x.name)


},[]  )

if(name===null) {

  return <>
  <h1>loading</h1>
  
  </>
}

  return (
    <div className='mt-5 p-5 container' >
    
      <h3>My Profile</h3>
      <div className='bg-success w-100'  style={{height:"3px"}} ></div>
      <h5 className='mt-5' >  <span className='h4' >hello by</span> : {name} ❤️  </h5>
     <div className="" style={{width:"33%"}} > 
     
     <div> <Link to={'updatePassword'} className='btn btn-outline-info mt-3 w-100 '  > do you want change your password for more security</Link></div>
     <div> <Link to={'updateUserData'} className='btn btn-outline-warning mt-3 w-100 '  > do you want change your data for more security</Link></div>
      
     
     
     
     </div>
    </div>
  )
}

