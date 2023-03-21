import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { Link, Navigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { UserContext } from "../../context/userContext";
import { useContext,useEffect,useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import {
  MapOutlined,
  SourceOutlined,
} from "@mui/icons-material";
const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll");

  };
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={`sidebar${isOpen ? '' : ' closed'}`}>
      <div className="toggleSidebar" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className="top">
          <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Issue List</span>
            </li>
          </Link>
          {/* <Link to="/aquifers" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Aquifers</span>
            </li>
          </Link> */}
    
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
        
          
          
      
        </ul>
      </div>
      <div onClick={()=>navigate('/home')}>Logout</div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
