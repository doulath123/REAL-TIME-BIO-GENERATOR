import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       
    <h1 className="heading">Bio - Generator</h1>
    <div className="container">
      <div className="option">

        
        <h2 className="box">Options</h2>
        <div className="box">
         
          <label>Profile photo </label>
        <input type="file"></input>
        </div>

        
        <div className="box">
        <label>Name </label>
        <input
          type="text"
         
          placeholder="Enter Name"
         
        />
        <label>Gender </label>
        <select
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button>Random Name</button>

        </div>
        <div className="box">
        <input type="checkbox"
        value="false"
        ></input>
          <label>Location </label>
          <input type="text"></input>
          <button>Random Location</button>
          

        </div>
        <div className="box">
        <input type="checkbox"
        value="false"
      
        ></input>
          <label>School </label>
          <input type="text"></input>
          <button>Random School</button>
          <br/>
          <label>Specialization </label>
          <input type="text" ></input>
          <button>Random Specialization</button>
          

        </div>
        <div className="box">
        <input type="checkbox"
         value="false"
     
         ></input>
          <label>Occupation </label>
          <input type="text"></input>
          <button>Random Occupation</button>
          

        </div>
       
        <div className="box">
        <input type="checkbox" value="false"
        ></input>
          <label>Religious Background</label>
          <textarea  className="textarea" rows="5" cols="20"></textarea>
          <button className="selectbutton">Random Religion</button>
   
        </div>
        <div className="box">
        <input type="checkbox" value="false"
        ></input>
          <label>Reason for meeting with missionaries</label>
          <textarea  className="textarea" rows="5" cols="20"></textarea>
          <button className="selectbutton">For peace</button>
          <button className="selectbutton">For personal reason</button>
          <button  className="selectbutton" >For prayer</button>
        </div>
        </div>
        
    
      <div className="result" id="result">
        <h2 className="box">Result</h2>
       
        
        {/* <div className="imagediv">
        {image?<img src=""alt="profile photo" />:null}
        </div> */}
        
        <div className="box">
    
        </div>

        
      </div>
    </div>
  </div>
  );
}

export default App;
