import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("AuthTokens")
      ? JSON.parse(localStorage.getItem("AuthTokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("AuthTokens")
      ? jwt_decode(localStorage.getItem("AuthTokens"))
      : null
  );

  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    console.log("data:", data);
    console.log("response:", response);

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/home");
    } else {
      alert("error!");
    }
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};