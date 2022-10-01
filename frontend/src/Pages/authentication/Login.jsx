import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [logincreds, setlogincreds] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setlogincreds({
      ...logincreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logincreds),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.userId) {
          localStorage.setItem("userId", data.userId);
        }
        alert("login sucessfull")
        navigate("/Questions")
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("invalid credincial! try later")
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      });
  };

  const url = "http://localhost:8080/auth/google";

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="enter email..."
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="enter password..."
        onChange={handleChange}
      />
      <br />
      <button type="submit">submit</button>
      <br />
      <br />
      <br />
      <a href={url}>signup with google 🧿🧿</a>

    </form>
  );
};

export default Login;
