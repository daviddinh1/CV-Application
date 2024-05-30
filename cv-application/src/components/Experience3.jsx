import '../styles/experience.css';

function Experience3({ item3, handleExp3Change, handleShowExp3, showExp3 ,handleAddExp3}) {
  return (
    <div className="xpContainer">
      <div className="pdHead">
        <h2>Experience 3</h2>
        <button className="btnOpen" onClick={handleShowExp3}>+</button>
      </div>
      <div className="inputContainer" style={{display: showExp3 ? 'block' : 'none'}}> 
        <label className="inputContainer">
          Company:
          <input name="company" value={item3.company} onChange={handleExp3Change} placeholder="Enter company name" />
        </label>
        <label className="inputContainer">
          Role:
          <input name="role" value={item3.role} onChange={handleExp3Change} placeholder="Enter role" />
        </label>
        <label className="inputContainer">
          Description:
          <input name="description" value={item3.description} onChange={handleExp3Change} placeholder="Enter description" />
        </label>
        <label className="inputContainer">
          Date:
          <input name="date" value={item3.date} onChange={handleExp3Change} placeholder="Enter date" />
        </label>
        <label className="inputContainer">
          Location:
          <input name="location" value={item3.location} onChange={handleExp3Change} placeholder="Enter Location" />
        </label>
        <button onClick={handleAddExp3}>Add</button>
      </div>
    </div>
  );
}

export default Experience3;