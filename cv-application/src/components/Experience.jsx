import { useState } from "react";
import '../styles/experience.css';

function Experience({ item, handleInputChange, handleAddItem, setShowExp1,showExp1 }) {
  return (
    <div className="xpContainer">
      <div className="pdHead">
        <h2>Experience</h2>
        <button className="btnOpen" onClick={setShowExp1}>+</button>
      </div>
      <div className="inputContainer" style={{display: showExp1 ? 'block' : 'none'}}> 
        <label className="inputContainer">
          Company:
          <input name="company" value={item.company} onChange={handleInputChange} placeholder="Enter company name" />
        </label>
        <label className="inputContainer">
          Role:
          <input name="role" value={item.role} onChange={handleInputChange} placeholder="Enter role" />
        </label>
        <label className="inputContainer">
          Description:
          <input name="description" value={item.description} onChange={handleInputChange} placeholder="Enter description" />
        </label>
        <label className="inputContainer">
          Date:
          <input name="date" value={item.date} onChange={handleInputChange} placeholder="Enter date" />
        </label>
        <label className="inputContainer">
          Location:
          <input name="location" value={item.location} onChange={handleInputChange} placeholder="Enter Location" />
        </label>
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
}

export default Experience;

