import '../styles/experience.css';

function Experience2({ item2, handleExp2Change, handleShowExp2, showExp2 ,handleAddExp2}) {
  return (
    <div className="xpContainer">
      <div className="pdHead">
        <h2>Experience 2</h2>
        <button className="btnOpen" onClick={handleShowExp2}>+</button>
      </div>
      <div className="inputContainer" style={{display: showExp2 ? 'block' : 'none'}}> 
        <label className="inputContainer">
          Company:
          <input name="company" value={item2.company} onChange={handleExp2Change} placeholder="Enter company name" />
        </label>
        <label className="inputContainer">
          Role:
          <input name="role" value={item2.role} onChange={handleExp2Change} placeholder="Enter role" />
        </label>
        <label className="inputContainer">
          Description:
          <input name="description" value={item2.description} onChange={handleExp2Change} placeholder="Enter description" />
        </label>
        <label className="inputContainer">
          Date:
          <input name="date" value={item2.date} onChange={handleExp2Change} placeholder="Enter date" />
        </label>
        <label className="inputContainer">
          Location:
          <input name="location" value={item2.location} onChange={handleExp2Change} placeholder="Enter Location" />
        </label>
        <button onClick={handleAddExp2}>Add</button>
      </div>
    </div>
  );
}

export default Experience2;