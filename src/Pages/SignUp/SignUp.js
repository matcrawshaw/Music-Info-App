import React, {useState} from "react";
import{Navigate, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    //Store in localStorage
    let storedItems = [];
    let itemsInStore = [];
    storedItems = JSON.parse(localStorage.getItem(itemsInStore));
    if (storedItems !==null) {
        itemsInStore = storedItems;
    }

    const handleSubmit = (e) => {
        let itemToStore = input;
        itemsInStore.push(itemToStore);

        localStorage.setItem("itemsInStore", JSON.stringify(itemsInStore));
        Navigate("/login");
    }
  return (
    <div className="log">
      <div className="wrapper">
        <div className="left">
          <h3 className="logo">Music Info App</h3>
          <span className="comment">
            Find information about your favourite singers.
          </span>
        </div>
        <div className="right">
          <div className="box">
            <form onSubmit={handleSubmit} className="box">
            <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="text" id="form3name" placeholder="Enter a Username" className="input form-control-lg" />
            <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="email" id="form3email" placeholder="Enter a email" className="input" />
            <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="password" id="form3password" placeholder="Enter a Password" className="input" />
            <button type="submit" className="signupButton">Sign Up</button>
            </form>
            <a href="../login"><button type="button" className="logButton">Log into Account</button></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;