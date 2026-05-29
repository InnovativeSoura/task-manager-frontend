import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const { data } = await axios.post(
        `${API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem("user", JSON.stringify(data));

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={changeHandler}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
