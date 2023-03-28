import React, {useState} from "react";
import "./SignUp.css";

function SignUp() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        isLoggedIn: true,
        savedSongs: [],
    });

    let storedItems = [];
    let itemsInStore = [];

    const handleSubmit = (e) => {
      //Store in localStorage
      console.log("storedItems-signup1:", storedItems);
      storedItems = JSON.parse(localStorage.getItem("itemsInStore"));
      console.log("storedItems-signup2:", storedItems);
      if (storedItems !==null) {
          itemsInStore = storedItems;
      }
      let itemToStore = input;
      let currentUser = input
      itemsInStore.push(itemToStore);

      localStorage.setItem("itemsInStore", JSON.stringify(itemsInStore));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  return (
    <div className="log">
      <div className="wrapper">
        <div className="left">
          <h3 className="logo">NoiseTracker</h3>
          <span className="comment">
            Find information about your favourite music.
          </span>
        </div>
        <div className="right">
          <div className="box">
            <form onSubmit={handleSubmit} className="box">
            <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="text" placeholder="Enter a Username" className="input" />
            <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="email" placeholder="Enter an email" className="input" />
            <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="password" placeholder="Enter a Password" className="input" />
            <button type="submit" className="signupButton">Sign Up</button>
            </form>
            <a href="/login"><button type="button" className="logButton">Log into Account</button></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;