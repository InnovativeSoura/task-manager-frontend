import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginUser(formData);

    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button>Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;