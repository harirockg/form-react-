// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");
  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log(" Printing First Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changelastNameHandler(event) {
  //   // console.log(" Printing last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value); 
  // }

  // formdata is an object which has two properties firstName and lastName
  const[formData, setFormData] = useState({
    firstName: "",
    lastName: "" ,
    email: "",
    country:"India",
    stretaddress:"",
    city:"",
    state:"",
    pincode:"",
    comments: "",
    isVisible:true,
    post:false,
    candidates:false,
    offers:true,
    mode:"",
    Notification:"",
    favCar:"",
    
    
  });

  // console.log(formData);

  function changeHandler(event) {
    const {name,value,checked,type}=event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
          // [event.target.name]: event.target.value
          [name]:type ==="checkbox" ? checked : value
        
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("finally printing the data of entire form......");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name </label>
        <br/>
        <input 
          type="text" 
          placeholder='enter first Name' 
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br/>

        <label htmlFor="lastName">Last Name </label>
        <br/>
        <input 
          type="text" 
          placeholder='enter last Name' 
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br/>

        <label htmlFor="email">Email Address </label>
        <br/>
        <input 
          type="email" 
          placeholder='enter your email' 
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br/>
        <label htmlFor="country">Country </label>
        <br/>
        <select
        onChange={changeHandler}
        name="country"
        id="country"
        value={formData.country}
        > 
        <option value="Select">Select</option>
        <option value="Scarpio">India</option>
        <option value="Bolero">Usa</option>
        <option value="Fortuner">Russia</option>
        <option value="Mercedes">China</option>
        <option value="Defender">France</option>

        </select>

        <br/>
        <label htmlFor="stretaddress">Street Address </label>
        <br/>
        <input 
          type="text" 
          placeholder='ex 23 hari villa delhi' 
          onChange={changeHandler}
          name="stretaddress"
          value={formData.stretaddress}
        />
        <br/>

        <label htmlFor="city">City </label>
        <br/>
        <input 
          type="text" 
          placeholder='delhi' 
          onChange={changeHandler}
          name="city"
          value={formData.city}
        />
        <br/>

        <label htmlFor="state">State </label>
        <br/>
        <input 
          type="text" 
          placeholder='Utta Pradesh' 
          onChange={changeHandler}
          name="state"
          value={formData.state}
        />
        <br/>

        <label htmlFor="pincode">Pincode </label>
        <br/>
        <input 
          type="text" 
          placeholder='275304' 
          onChange={changeHandler}
          name="pincode"
          value={formData.pincode}
        />
        <br/>

        <label htmlFor="comments">Comments </label>
        <br/>
        <textarea 
          placeholder='enter your comments' 
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />  

        <br/>
        

        <input
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}
        />

        <label htmlFor='isVisible'>Am I visible ? </label>

        <br/>
        
        <input
        type="checkbox"
        onChange={changeHandler}
        name="post"
        id="post"
        checked={formData.post}
        />
        <label htmlFor='post'>Post </label>
        <p htmlFor='post'>always updated with the post</p>
        
        <br/>
        
        <input
        type="checkbox"
        onChange={changeHandler}
        name="candidates"
        id="candidates"
        checked={formData.candidates}
        />
        <label htmlFor='candidates'>Candidates </label>
        <p htmlFor='candidates'>get notified when candiated apply for job</p>
        <br/>

        <input
        type="checkbox"
        onChange={changeHandler}
        name="offers"
        id="offers"
        checked={formData.offers}
        />
        <label htmlFor='offers'>Offers </label>
        <p htmlFor='offers'>get notified when a candidate acept or reject an offer </p>
        <br/>

        <label htmlFor='Notification'>Push Notitfications</label>
        <p htmlFor='Notification'> these are deliverd via SMS to your mobile phone</p>

        <input
        type="radio"
        onChange={changeHandler}
        name="Notification"
        value="Everything"
        id="Everything"
        checked={formData.Notification === "Everything"}
        />

        <label htmlFor='Everything'>Everything</label>
        <br/>
        <input
        type="radio"
        onChange={changeHandler}
        name="Notification"
        value="same-as-email"
        id="same-as-email"
        checked={formData.Notification === "same-as-email"}
        />

        <label htmlFor='same-as-email'>Same as email</label>

        <br/>
        <input
        type="radio"
        onChange={changeHandler}
        name="Notification"
        value="No-push-notifications"
        id="No-push-notifications"
        checked={formData.Notification === "No-push-notifications"}
        />

        <label htmlFor='No-push-notifications'>No push notifications</label>
        <br/>




        <fieldset>
          <legend>Mode:</legend>

          <input
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Online-Mode"
        id="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />

        <label htmlFor='Online-Mode'>Online Mode</label>

        <input
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Offline-Mode"
        id="Offline-Mode"
        checked={formData.mode === "Offline-Mode"}
        />

        <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>
        
        <label htmlFor="favCar">Favourite Car : </label>

        <select
        onChange={changeHandler}
        name="favCar"
        id="favCar"
        value={formData.favCar}
        > 
        <option value="Select">Select</option>
        <option value="Scarpio">Scarpio</option>
        <option value="Bolero">Bolero</option>
        <option value="Fortuner">Fortuner</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Defender">Defender</option>

        </select>

        {/* <input type='submit' value='submit'/> */}

        <br/>
        <br/>
        <button>Save</button>
        

      </form>
    </div>
  );
}

export default App;
