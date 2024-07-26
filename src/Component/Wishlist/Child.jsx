import React from 'react'

export default function Child() {

    function reRender () {


        console.log("i'll re render");
    }

  return (
    <div>

        <h1>hello world </h1>
        <div className="btn btn-outline-danger"> click here to re render </div>

      
    </div>
  )
}
