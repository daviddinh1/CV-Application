import { useState } from 'react'
import '../styles/header.css'

function Header({firstName, setFirstName, email, setEmail, phoneNum, setPhoneNum, location, setLocation }){
 
 return(
  <div className="container">
    <h2>Personal Details</h2>
   <label className="inputContainer">First Name 
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
 );
}


export default Header;