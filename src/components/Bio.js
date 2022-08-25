import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import {useState } from "react";
import "./Bio.css";

function Bio() {
  const [name, setName] = useState("Nayab Syed Doulath Basha");
  const [location, setLocation] = useState("Andhra Pradesh");
  const [stream, setStream] = useState("B.Sc");
  const [school, setSchool] = useState("SNSR");
  const[occupation,setOccupation]=useState("Developer");
  const[religion,setReligion]=useState("Muslim")
  const[meeting,setMeeting]=useState("just conversation");
  const[image,setimage]=useState("https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png");
  const [gender,setGender]=useState("male");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const[isCheckedOccuption,setIsCheckedoccuption]=useState(true)
  const[isCheckedReligion,setIsCheckedReligion]=useState(true)
  const[isCheckedSchool,setIsCheckedSchool]=useState(true)

  
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleOnChangeReligion=()=>{
    setIsCheckedReligion(!isCheckedReligion)
  }
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };
  const handleOnChangeSchool=()=>{
    setIsCheckedSchool(!isCheckedSchool)
  }


  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleInputAge=(e)=>{
    setSelectionRange(e.target.value)
  }
  const handleOccupation=(e)=>{
    setOccupation(e.target.value)
  }
  const handleReligion=(e)=>{
    setReligion(e.target.value)
  }
  const handleMeeting=(e)=>{
    setMeeting(e.target.value)
  }
  const handleGender=(e)=>{
    setGender(e.target.value)
  }
  const generateRandomSchool=()=>{
    let schoolArray=["Masai","SV","Nalanda","Gov", "Rayalaseema"]
    setSchool(schoolArray[Math.floor(Math.random()*4)])
    console.log()

  }
  const generateRandomName=()=>{
    let schoolArray=["Ravi","Jessanth","Tharun","Kishor"]
    setName(schoolArray[Math.floor(Math.random()*4)])
    

  }
  
  const generateRandomSpecialization=()=>{
    let schoolArray=["Engineering","Mechanical","Science","Arts","commerce","Socialscience"]
    setStream(schoolArray[Math.floor(Math.random()*4)])
    

  }
  
  const generateRandomLocation=()=>{
    let schoolArray=["Hyderabad","Mumbai","Bengaluru","Kolkata","Delhi"]
    setLocation(schoolArray[Math.floor(Math.random()*4)])
    console.log()

  }
  
  const generateRandomOccupation=()=>{
    let OccuptionArray=["Engineer","Developer","Electrician","Salesperson","Businessman","Politacian"]
    setOccupation(OccuptionArray[Math.floor(Math.random()*4)])
    console.log()

  }
  const generateRandomReligion=()=>{
    let religionArray=["Hindu","Sikh","Catholic","Christian","Jain","Buddhist"]
    setReligion(religionArray[Math.floor(Math.random()*4)])
    console.log()

  }
  const photoUpload=(e)=>{
  const reader=new FileReader()
  const file = e.target.files[0];
  reader.onloadend = () => {
    setimage(reader.result)
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }
  reader.readAsDataURL(file);
}
  return (
   
       
      
      <div className="container">
        <div className="option">
          <h2 className="box">Options</h2>
          <div className="box">
            <label>Profile Photo </label>
          <input type="file" onChange={photoUpload}></input>
          </div>
          <div className="box">
          <label>Name </label>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={handleInputName}
          />
          <label> Gender </label>
          <select onChange={(e)=>handleGender(e)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button onClick={generateRandomName}>Random name</button>
          </div>
          <div className="box">
          <input type="checkbox"
          value="false"
          checked={isCheckedLocation}
          onChange={handleOnChangeLocation}
          ></input>
            <label>Location </label>
            <input type="text" value={location} onChange={handleInputLocation}></input>
            <button onClick={generateRandomLocation}>Random Location</button>
            </div>
          <div className="box">
          <input type="checkbox"
          value="false"
          checked={isCheckedSchool}
          onChange={handleOnChangeSchool}
          ></input>
            <label>School </label>
            <input type="text" value={school} onChange={handleInputSchool}></input>
            <button onClick={generateRandomSchool}>Random School</button>
            <br/>
            <label>Specialization </label>
            <input type="text" value={stream}
             onChange={handleInputStream}></input>
            <button onClick={generateRandomSpecialization}>Random Specialization</button>
          </div>
          <div className="box">
          <input type="checkbox"
           value="false"
           checked={isCheckedOccuption}
           onChange={handleOnChangeOccuption}
           ></input>
            <label>Occupation </label>
            <input type="text" value={occupation} onChange={handleOccupation}></input>
            <button onClick={generateRandomOccupation}>Random Occupation</button>
          </div>
         <div className="box2">
          <input type="checkbox"
          value="false"
          checked={isCheckedReligion}
          onChange={handleOnChangeReligion}
          ></input>
            <label  style={{verticalAlign:"middle",margin:"3px",marginBottom:"6px",padding:"0",color:"#222"}}>Religious background</label>
            <textarea className="textarea" rows="5" cols="20" value={religion} onChange={handleReligion}></textarea>
            <button className="selectbutton" onClick={generateRandomReligion}>Random religion</button>
          </div>
          <div className="box2">
          <input type="checkbox" value="false"
          checked={isChecked}
          onChange={handleOnChange}
          ></input>
            <label style={{margin:"3px",marginBottom:"6px",padding:"0",color:"#222"}}>Meeting reason </label>
            <textarea  className="textarea" rows="5" cols="20" value={meeting} onChange={handleMeeting}></textarea>
            <button className="selectbutton1" onClick={()=>setMeeting("for peace of mind")}>For peace</button>
            <button className="selectbutton2" onClick={()=>setMeeting("for personal reason")}>For personal reason</button>
            <button  className="selectbutton3" onClick={()=>setMeeting("for payer to fill energetic ")}>For prayer</button>
          </div>
          </div>
        <div className="result" id="result">
          <h2 className="box">Result</h2>
          <div className="imagediv">
          {image?<img src={image} alt="profile photo" />:null}
          </div>
          <div className="box">
            {name} {isCheckedLocation ? `is from the ${location}` : null}  {isCheckedSchool?`${gender=="male"? "He":"She"} is studying ${stream} at ${school}`:null}.{isCheckedOccuption ? `${gender=="male"? " His":" Her"} occupation is ${occupation}` : null}   
            {isCheckedReligion ? `${gender=="male"? " His":" Her"} religion is ${religion}` : null}   {gender=="male"? "He":"She"} {isChecked ? `meet you for ${meeting}` : null}
          </div>
        </div>
      </div>
  );
}
export default Bio;