import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    if (confirm("are you sure to logout") == true) {
      localStorage.removeItem("token");
    navigate("/login");
    alert("Logged out Successfully!");
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Link
          className="navbar-brand text-white"
          to={token? "/home" : "/"}
        >
          <img
            src="./src/assets/notes.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          Cloud Notes
        </Link>
        <Link to="/about" className={`text-primary mr-auto ${
            location.pathname === "/about" ? "active text-white" : ""
          }`}>About</Link>



{!token?
<div className="d-flex justify-content-end">
          <Link to="/login" className={`text-primary ${
            location.pathname === "/login" ? "active text-white" : ""
          }`}>Login</Link>
          <Link to="/signup" className={`text-primary mx-2 ${
            location.pathname === "/signup" ? "active text-white mx-2" : ""
          }`}>Register</Link>

</div>:
        <div className="d-flex justify-content-end">
          
          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
}
      </nav>
    </>
  )
};

export default Navbar;
