import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const navigate = useNavigate();

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
      const response = await axios.post(
        `${API_URL}/api/auth/register`,
        formData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      toast.success("Registration Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={changeHandler}
          required
        />

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

        <button type="submit">Register</button>

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;