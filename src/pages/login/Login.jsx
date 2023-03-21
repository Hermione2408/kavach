import "./login.scss";
import React, { Component, useState, useEffect, useContext } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@mui/material";
import Modal from "../../components/Modal/Modal";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState('Police');
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const { userDetails } = useContext(UserContext);

  let userOptions = ["Police", "Hospital"].map((el) => {
    return {
      label: el,
      value: el,
    };
  });
  const closeLoginPopup = ()=>{
    dispatch({type:"HIDELOGIN"})
  }
  const onClickLogin = () => {
    console.log("Clicked on login");
    let userDetails = {
      email: email,
      userType: userType,
    };
    dispatch({ type: "SAVE", payload: userDetails });
    localStorage.setItem("userDetails", userDetails);
    navigate('/admin')
  };
  return (
    <Modal>
      <div className="login a-flex a-fdc">
        <div className="close-icon" onClick={closeLoginPopup}>
        <CloseOutlinedIcon />
        </div>

          <div className="a-flex a-fdc a-aic">
          <Link to="/" style={{textDecoration:'none',cursor:'pointer'}}>
            <div className="logo a-flex a-aic a-fdc">
              <div className="outer">
                <div className="inner"></div>
              </div>
                <div className="text a-flex">
                  <p style={{ color: "#000000" }}>Sahayata</p>
                </div>
            </div>
            </Link>
            <div className="heading">Login</div>
            <div className="subheading">
              Enter your email and password below
            </div>
          </div>
          <div className="a-flex a-fdc">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password a-flex a-fdc  ">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-16">
            <Select
              options={userOptions}
              onChange={(val) => setUserType(val.label)}
              defaultValue={userOptions[0]}
            />
          </div>
          <Button disabled={!userType || !email || !password} onClick={() => onClickLogin()} variant="contained">Login</Button>
        </div>
    </Modal>
  );
}

export default Login;
