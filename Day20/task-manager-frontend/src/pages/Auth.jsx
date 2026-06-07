import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (isLogin) {
        response = await axios.post(
          `${API_URL}/api/auth/login`,
          {
            email: formData.email,
            password: formData.password,
          }
        );
      } else {
        response = await axios.post(
          `${API_URL}/api/auth/register`,
          formData
        );
      }

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert(
        isLogin
          ? "Login Successful!"
          : "Registration Successful!"
      );

      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={changeHandler}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={changeHandler}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={changeHandler}
          required
        />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={() =>
              setIsLogin(!isLogin)
            }
          >
            {isLogin
              ? "Register"
              : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;