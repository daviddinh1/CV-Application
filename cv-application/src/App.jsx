import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Resume from './components/resume';

function App() {
  const [firstName, setFirstName] = useState('David Dinh');
  const [email, setEmail] = useState('daviddinh158@gmail.com');
  const [phoneNum, setPhoneNum] = useState('713-330-5506');
  const [location, setLocation] = useState('Richmond, TX');
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

      
      <Resume firstName={firstName} email={email} phoneNum={phoneNum} location={location}/>
      


    </div>
  )
}

export default App
