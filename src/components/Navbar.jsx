import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Task Manager</h2>

      <button className="logout-btn" onClick={logoutHandler}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;