import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Resume from './components/resume';
import Education from './components/Education';

function App() {
  //for header
  const [firstName, setFirstName] = useState('David Dinh');
  const [email, setEmail] = useState('daviddinh158@gmail.com');
  const [phoneNum, setPhoneNum] = useState('713-330-5506');
  const [location, setLocation] = useState('Richmond, TX');
  
  //for resume
  const [school,setSchool] = useState('University of Houston');
  const [degree,setDegree] = useState('bachelors');
  const [startDate,setStartDate] = useState('1-1-2024');
  const [endDate,setEndDate] = useState('4-4-2024');
  const [locationSchool, setSchoolLocation] = useState('Houston, TX');
  
  //for header
  function changeFirstName(e){
    setFirstName(e.target.value);
  }

  function changeEmail(e){
    setEmail(e.target.value);
  }

  function changePhone(e){
    setPhoneNum(e.target.value);
  }

  function changeLocation(e){
    setLocation(e.target.value);
  }

  //for education
  function changeSchool(e){
    setSchool(e.target.value);
  }

  function changeDegree(e){
    setDegree(e.target.value);
  }

  function changeStartDate(e){
    setStartDate(e.target.value);
  }

  function changeEndDate(e){
    setEndDate(e.target.value);
  }

  function changeSchoolLocation(e){
    setSchoolLocation(e.target.value);
  }


  return (
    <div className="sep">
      <Header
        firstName={firstName}
        setFirstName={changeFirstName}
        email={email}
        setEmail={changeEmail}
        phoneNum= {phoneNum}
        setPhoneNum={changePhone}
        location={location}
        setLocation={changeLocation}
      />

      <Education
        school={school}
        setSchool={changeSchool}
        degree={degree}
        setDegree={changeDegree}
        startDate={startDate}
        setStartDate={changeStartDate}
        endDate={endDate}
        setEndDate={changeEndDate}
        locationSchool={locationSchool}
        setSchoolLocation={changeSchoolLocation}
      />

      
      <Resume firstName={firstName} email={email} phoneNum={phoneNum} location={location} school={school} degree={degree}
        startDate={startDate}
        endDate={endDate}
        locationSchool={locationSchool}
      />
      


    </div>
  )
}

export default App
