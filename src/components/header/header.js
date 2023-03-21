import "./header.scss";
import Bus1Image from "../../assets/imgs/Bus1.png";
import Bus2Image from "../../assets/imgs/Bus2.png"

function Header(){
    return (
        <div className="header">
        <img alt="IRCTC Bus Booking" className="img-fluid" src={Bus1Image}/>
        <img alt="Book Online Bus"  src={Bus2Image}/> 
        </div>
    )
}
export default Header;