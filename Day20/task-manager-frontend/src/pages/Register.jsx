import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await registerUser(formData);

    if (data._id) {
      toast.success("Registration Successful");
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

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

        <button>Register</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;