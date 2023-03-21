
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./BottomBar.scss";
export default function BottomBar() {
  const location = useLocation()
  const path = location.pathname.slice(1)
  const displayBottomBar = (['report','reportpage','profilepage','survey','assistance','mechanic','petrolpumps','chauffer'].indexOf(path) >-1) || (path === '/')
  return (
    <>
    {displayBottomBar && <div className="bottom-bar">
      <NavLink to="/" activeClassName="active">Navigate</NavLink>
      <NavLink to="/reportpage" activeClassName="active">
       Report</NavLink>
      <NavLink to="/assistance" activeClassName="active">Assistance</NavLink>
      <NavLink to="/profilepage" activeClassName="active">Profile</NavLink>
    </div>}
    </>
  );
}