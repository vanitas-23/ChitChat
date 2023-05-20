import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="logo">Chat On</span>
        <div className="user">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="user" />
          <span>Sumit</span>
          <button>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
