import React from "react";
import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
function Navbar() {
  const navigate = useNavigate();
  const googleSuccess = (res) => {
    console.log(res);
    navigate("/");
  };
  const googleFailure = (res) => {
    console.log(res);
  };
  const logoutSuccess = (res) => {};
  return (
    <div className="navbar">
      <GoogleLogin
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        clientId="183429115623-n2as2ia7anmhqjcq45nbnr7f31fdk8eo.apps.googleusercontent.com"
        buttonText="Log in with Google"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Navbar;
