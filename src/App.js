import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotification:""
  });

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData((prev)=>{
      return ({...prev,[name]:type==="checkbox"?checked:value});
    })
  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log(formData);
  }

  return(
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label><br />
        <input className='outline' type="text" name="lastName" onChange={changeHandler} placeholder='Juvaraj' id="lastName" value={formData.lastName}/>
        <br />
        
        <label htmlFor="lastName">Last Name</label><br />
        <input className='outline' type="text" name="lastName" onChange={changeHandler} placeholder='Bhattacharjee' id="lastName" value={formData.lastName}/>
        <br />
        
        <label htmlFor="email">Email Address</label><br />
        <input className='outline' type="email" name="email" onChange={changeHandler} placeholder='juvarajb@gmail.com' id="email" value={formData.email}/>
        <br />
        
        <label htmlFor="country">Country</label><br />
        <select onChange={changeHandler} className='outline' id='country' name='country' value={formData.country}>
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />
        
        <label htmlFor="streetAddress">Street Address</label><br />
        <input className='outline' type="text" name="streetAddress" onChange={changeHandler} placeholder='210 Jessore Road' id="streetAddress" value={formData.streetAddress}/>
        <br />

        <label htmlFor="city">City</label><br />
        <input className='outline' type="text" name="city" onChange={changeHandler} placeholder='Kolkata' id="city" value={formData.city}/>
        <br />
        
        <label htmlFor="state">State</label><br />
        <input className='outline' type="text" name="state" onChange={changeHandler} placeholder='West Bengal' id="state" value={formData.state}/>
        <br />
        
        <label htmlFor="postalCode">Postal Code</label><br />
        <input className='outline' type="text" name="postalCode" onChange={changeHandler} placeholder='700089' id="postalCode" value={formData.postalCode}/>
        <br />
        <br></br>
        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
            <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={changeHandler} />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting. </p>
            </div>
          </div>
          <div className='flex'>
            <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler} />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job. </p>
            </div>
          </div>
          <div className='flex'>
            <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler} />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer. </p>
            </div>
          </div>
        </fieldset>
        <br></br>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input type="radio" id='pushEverything' name='pushNotification' value="Everything" onChange={changeHandler}  />
          <label htmlFor="pushEverything">Everything</label><br />
          <input type="radio" id='pushEmail' name='pushNotification' value="Same as email" onChange={changeHandler}  />
          <label htmlFor="pushEmail">Same as email</label><br />
          <input type="radio" id='pushNothing' name='pushNotification' value="No Push Notifications" onChange={changeHandler}  />
          <label htmlFor="pushNothing">No Push Notifications</label><br />
        </fieldset>
        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
      </form>
    </div>
  );
}

export default App;
