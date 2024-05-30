import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Resume from './components/resume';
import Education from './components/Education';
import Experience from './components/Experience'
import Experience2 from './components/Experience2';

function App() {
  //for header
  const [firstName, setFirstName] = useState('David Dinh');
  const [email, setEmail] = useState('daviddinh158@gmail.com');
  const [phoneNum, setPhoneNum] = useState('713-330-5506');
  const [location, setLocation] = useState('Richmond, TX');
  const [showHead,setShowHead] = useState(false);
  
  
  //for resume
  const [school,setSchool] = useState('University of Houston');
  const [degree,setDegree] = useState('Bachelors');
  const [startDate,setStartDate] = useState('1-1-2024');
  const [endDate,setEndDate] = useState('4-4-2024');
  const [locationSchool, setSchoolLocation] = useState('Houston, TX');
  const [showExp, setShowExp] = useState(false);

  //for experience
  const [item, setItem] = useState({ company: '', role: '', description: '' , date: '',location: ''});
  const [show, setShow] = useState(false);
  const [showExp1, setShowExp1] = useState(false);

  //for experience 2
  const xpItems = { company: '', role: '', description: '' , date: '',location: ''};
  const [item2, setItem2] = useState(xpItems);
  const [show2, setShow2] = useState(false);
  const [showExp2, setShowExp2] = useState(false);

  const handleExp2Change = (event) => {//not allowint me to type
    const {name,value} = event.target;
    setItem2((prevItems) => ({...prevItems,[name]:value}))
  }

  function handleShowExp2(){
    setShowExp2(!showExp2);
  }
  
  function handleAddExp2(){ //add items to resume
    setShow2(!show2);
  }

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

  function handleShow1(){
    setShowHead(!showHead);
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

  function changeExp(){
    setShowExp(!showExp);
  }


  //for experience
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem((prevNewItem) => ({ ...prevNewItem, [name]: value }));
  };

  const handleAddItem = () => {
    setShow(!show);
  };

  function handleShowExp1(){
    setShowExp1(!showExp1);
  }



  return (
    <div className="sep">
      <div className="resumeChoices">
        <Header
        firstName={firstName}
        setFirstName={changeFirstName}
        email={email}
        setEmail={changeEmail}
        phoneNum= {phoneNum}
        setPhoneNum={changePhone}
        location={location}
        setLocation={changeLocation}
        showHead={showHead}
        setShowHead={handleShow1}
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
        showExp={showExp}
        setShowExp={changeExp}
      />

      <Experience
              item={item}
              handleInputChange={handleInputChange}
              handleAddItem={handleAddItem}
              showExp1 ={showExp1}
              setShowExp1={handleShowExp1}
            />

      <Experience2 item2={item2} handleExp2Change={handleExp2Change} showExp2={showExp2} handleAddExp2={handleAddExp2} handleShowExp2={handleShowExp2}></Experience2>

      </div>
      
      
      <Resume firstName={firstName} email={email} phoneNum={phoneNum} location={location} school={school} degree={degree}
        startDate={startDate}
        endDate={endDate}
        locationSchool={locationSchool}
        item={item}
        show={show}
        item2={item2}
        show2={show2}
      />
      


    </div>
  )
}

export default App
