import '../styles/resume.css'
import React from 'react';

function Resume({firstName,email,phoneNum,location,school,degree,startDate,endDate,locationSchool,item,show2,item2,show}){
 return (
  <div className="resumeContainer"> 
   <div className="header">
    <h2>{firstName}</h2>
    <div className="headerItems">
     <div>{email}</div>
     <div>{phoneNum}</div>
     <div>{location}</div>
    </div>
   </div>
   <div className="educationHeader">
      Education
    </div>
   <div className="educationContainer">
    <div className="eduSec1">
     <div>{degree}</div>
     <div>{school}</div>
    </div>
    <div className='eduSec2'>
     <div className="dates">
         <div>{startDate}</div>
         <div>{endDate}</div>
     </div>
     <div>{locationSchool}</div>
    </div>
   </div>

   <div className="educationHeader">Professional Experience</div>
   {show && <div className="experienceItem">
    <div className ="xpDate">
     <div>{item.date}</div>
     <div>{item.location}</div>
    </div>
    <div className="xpContent">
     <div style={{fontWeight:'bold'}}>{item.company}</div>
     <div>{item.role}</div>
     <div style={{fontSize: '10px'}}>{item.description}</div>
    </div>
   </div>}

    {show2 && <div className="experienceItem">
    <div className ="xpDate">
     <div>{item2.date}</div>
     <div>{item2.location}</div>
    </div>
    <div className="xpContent">
     <div style={{fontWeight:'bold'}}>{item2.company}</div>
     <div>{item2.role}</div>
     <div style={{fontSize: '10px'}}>{item2.description}</div>
    </div>
   </div>}

 
  </div>
 )
}

export default Resume;


