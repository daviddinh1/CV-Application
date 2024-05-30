import { useState } from "react";
import '../styles/education.css';

function Education({school, setSchool, degree, setDegree, startDate, setStartDate, endDate, setEndDate, locationSchool, setSchoolLocation,setShowExp,showExp}){
 return(
  <div className="container">
    <div className="pdHead">
      <h2>Education</h2>
      <button className="btnOpen" onClick={setShowExp}>+</button>
    </div>
    <div className="inputContainer" style={{display: showExp ? 'block' : 'none'}}>
        <label className="inputContainer">
          School
          <input value={school} onChange={setSchool}></input> 
        </label>

        <label className="inputContainer">
          Degree
          <input value={degree} onChange={setDegree}></input> 
        </label>
        
        <div className="dates">
          <label className="inputContainer">
            Start Date
          <input value={startDate} onChange={setStartDate}></input> 
          </label>

          <label className="inputContainer">
            End Date
            <input value={endDate} onChange={setEndDate}></input>
          </label>
        </div>

        <label className="inputContainer">
          Location
          <input value={locationSchool} onChange={setSchoolLocation}></input>
        </label>
      </div>
  </div>

 );
}

export default Education;