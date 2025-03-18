
import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"> 
      <div aria-live="assertive" role="alert" class="loader"></div>
    </div>
  )
}

export default Loader;
