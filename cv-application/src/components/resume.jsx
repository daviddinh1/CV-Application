import '../styles/resume.css'

function Resume({firstName,email,phoneNum,location}){
 return (
  <div className="header">
   <h2>{firstName}</h2>
   <div className="headerItems">
    <div>{email}</div>
    <div>{phoneNum}</div>
    <div>{location}</div>
   </div>
  </div>
 )
}

export default Resume;


