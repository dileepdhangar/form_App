import { useState } from "react";
import "./App.css";

function App() {

  const [FormData, setFormData] = useState({

    firstName: "", LastName: "", email: "", country: "india", streetAddress: "", City: "", Postalcode: "", state: "",
    comments: false, candidates: false, offers: false, pushNotification: ""
  })
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the value of data")
    console.log(FormData)

  }
  return (
   <div className="formback"> 
     <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Dileep"
          name="firstName"
          id="firstName"
          value={FormData.firstName}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 border-radius: 0.5rem"
        />
        <br></br>
        <label htmlFor="LastName">LastName</label>
        <br />
        <input
          type="text"
          placeholder="Dhangar"
          name="LastName"
          id="LastName"
          value={FormData.LastName}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ...   "
        />
        <br></br>
        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          placeholder="abcd@gmail.com"
          name="email"
          id="email"
          value={FormData.email}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ..."
        />
        <br></br>
        <label htmlFor="country">Country</label>
        <br></br>
        <select
          name="country"
          id="country"
          value={FormData.county}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ..."
        >
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>
        <br></br>
        <label htmlFor="streetAddress">Street address</label>
        <br />
        <input
          type="text"
          placeholder="Rz-8, Lane No-3"
          name="streetAddress"
          id="streetAddress"
          value={FormData.streetAddress}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ..."
        />
        <br></br>
        <label htmlFor="City">City</label>
        <br />
        <input
          type="text"
          placeholder="Delhi"
          name="City"
          id="City"
          value={FormData.City}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ..."
        />

        <br></br>
        <label htmlFor="state">state/provision</label>
        <br />
        <input
          type="text"
          placeholder="Delhi"
          name="state"
          id="state"
          value={FormData.state}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ..."
        />

        <br></br>
        <label htmlFor="Postalcode">Zip/Postal code</label>
        <br />
        <input
          type="number"
          placeholder="110045"
          name="Postalcode"
          id="Postalcode"
          value={FormData.Postalcode}
          onChange={changeHandler}
          className="	border-solid border-2 border-sky-500 ..."
        />
        <br></br>
        <br></br>
        <fieldset>

          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={FormData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={FormData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get notified when candidates applied for a job. </p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={FormData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">offers</label>
              <p>Get notified when candidates accepts of rejects offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <br></br>
          <br></br>
          <legend> Push Notifications </legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            id="pushNotification"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          >

          </input>
          <label htmlFor="pushNotification">Everything</label>
          <br></br>
          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="same as email"
            onChange={changeHandler}
          >
          </input>
          <label htmlFor="pushEmail">same as Email</label>
          <br></br>
          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No push Notification"
            onChange={changeHandler}
          >
          </input>
          <label htmlFor="pushNothing">No push Notification</label>
        </fieldset>
        <br></br>
        <button className="bg-blue-500 text-white font-bold rounded py-1 px-4">Save</button>
      </form>
    </div>
   </div>
  );
}

export default App;




