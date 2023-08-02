import {useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Login.css";
function Loginpage() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleApi = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        // username: 'mor_2314',
        // password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => {
        // const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          console.log(user);
          // setToken(data.token)
          navigate("/product");
        } else {
          console.log("token not found");
        }
      })
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="title">LOGIN </h2>
        <h5 className="form-group">Username:</h5>
        <input
          className="input"
          name="username"
          type="text"
          onChange={handleInputChange}
          value={user.state}
        />
        <h5 className="form-group">Password:</h5>
        <input
          className="input"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={user.state}
        />
        <button
          className="bttn"
          onClick={() => {
            
            handleApi();
          }}
        >
          log in
        </button>
      </div>
    </div>
  );
}
export default Loginpage;
