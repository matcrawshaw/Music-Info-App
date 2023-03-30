import React, {useState} from "react";
import "./Login.css";

function Login() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //Store in localStorage
    let storedItems = [];
    storedItems = JSON.parse(localStorage.getItem("itemsInStore"));
    console.log("storedItems-login:", storedItems);
    storedItems.forEach((item) => {
      if (item.name === input.name && item.email === input.email && item.password === input.password) {
        console.log("Item.name-login:", item.name, "input.name-login:", input.name);
        alert(`Hello, ${input.name}, welcome to Music Info App`);
      } else {
        alert(`Sorry, ${input.name}, we don't have details about you.\nDo you want to sign up?\nClick on the buttom 'SignUp'`);
      }
    });
  }
  

  return (
    <div className="log">
      <div className="wrapper">
        <div className="left">
          <h3 className="logo">NoiseTracker</h3>
          <span className="comment">
            Find information about your favourite artists.
          </span>
        </div>
        <div className="right">
          <div className="box">
            <form onSubmit={handleSubmit} className="box">
            <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="text" id="form3name" placeholder="Enter a Username" className="input" />
            <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="email" id="form3email" placeholder="Enter an email" className="input" />
            <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="password" id="form3password" placeholder="Enter a Password" className="input" />
            <button type="submit" className="logButton">Log into Account</button>
            </form>
            <a href="/"><button type="button" className="signupButton">SignUp</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;