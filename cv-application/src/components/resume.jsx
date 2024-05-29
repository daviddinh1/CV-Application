import '../styles/resume.css'

function Resume({firstName,email,phoneNum,location,school,degree,startDate,endDate,locationSchool}){
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

   <div>
    <div>{school}</div>
    <div>{degree}</div>
    <div>{startDate}</div>
    <div>{endDate}</div>
    <div>{locationSchool}</div>
   </div>
  </div>
 )
}

export default Resume;


