import '../styles/experience.css';

function Experience4({ item4, handleExp4Change, handleShowExp4, showExp4 ,handleAddExp4}) {
  return (
    <div className="xpContainer">
      <div className="pdHead">
        <h2>Experience 4</h2>
        <button className="btnOpen" onClick={handleShowExp4}>+</button>
      </div>
      <div className="inputContainer" style={{display: showExp4 ? 'block' : 'none'}}> 
        <label className="inputContainer">
          Company:
          <input name="company" value={item4.company} onChange={handleExp4Change} placeholder="Enter company name" />
        </label>
        <label className="inputContainer">
          Role:
          <input name="role" value={item4.role} onChange={handleExp4Change} placeholder="Enter role" />
        </label>
        <label className="inputContainer">
          Description:
          <input name="description" value={item4.description} onChange={handleExp4Change} placeholder="Enter description" />
        </label>
        <label className="inputContainer">
          Date:
          <input name="date" value={item4.date} onChange={handleExp4Change} placeholder="Enter date" />
        </label>
        <label className="inputContainer">
          Location:
          <input name="location" value={item4.location} onChange={handleExp4Change} placeholder="Enter Location" />
        </label>
        <button onClick={handleAddExp4}>Add</button>
      </div>
    </div>
  );
}

export default Experience4;