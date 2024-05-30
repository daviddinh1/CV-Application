import { useState } from 'react'
import '../styles/header.css'

function Header({firstName, setFirstName, email, setEmail, phoneNum, setPhoneNum, location, setLocation,setShowHead,showHead }){
 
 return(
  <div className="container">
    <div className='pdHead'>
      <h2>Personal Details</h2>
      <button className="btnOpen" onClick={setShowHead}>+</button>
    </div>
   <div className="inputContainer" style={{display: showHead ? 'block' : 'none'}}>
    <label className="inputContainer" >First Name 
      <input value={firstName} onChange={setFirstName}></input>
    </label>

      <label className="inputContainer">Email
      <input type="email" value={email} onChange={setEmail}></input>
    </label>

      <label className="inputContainer">Phone
      <input value={phoneNum} onChange={setPhoneNum}></input>
    </label>

      <label className="inputContainer">Address
      <input value={location} onChange={setLocation}></input>
    </label>

   </div>
 
  </div>
 );
}


export default Header;