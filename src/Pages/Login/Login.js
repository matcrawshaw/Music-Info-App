import React, {useState} from "react";
import{Navigate, useNavigate } from "react-router-dom";
//import "./Login.css";

function Login() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  //Store in localStorage
  let storedItems = [];
  let itemsInStore = [];
  storedItems = JSON.parse(localStorage.getItem(itemsInStore));
 
  const handleSubmit = (e) => {
    storedItems.forEach((item) => {
      if (item.name === input.name && item.email === input.email && item.password === input.password) {
        alert(`Hello, ${input.name}, welcome to Music Info App`);
      }
    });
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
            <form onSubmit={handleSubmit}>
            <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="text" id="form3Examplelcg" placeholder="Enter a Username" className="input form-control-lg" />
            <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.email] : e.target.value,})} type="email" id="form3Examplelcg" placeholder="Enter a email" className="input" />
            <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.password] : e.target.value,})} type="password" id="form3Examplelcg" placeholder="Enter a Password" className="input" />
            <button type="submit" className="logButton">Log into Account</button>
            </form>
            <a href="../login"><button type="button" className="signupButton">SignUp</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;