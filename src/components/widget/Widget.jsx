import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { ListAltOutlined, SearchOffOutlined, SearchOutlined } from "@mui/icons-material";

const Widget = (props) => {

  const {data} = props
  return (
    <div className="widget" style={{backgroundColor:data.colorCode ? (data.count> 50 ? '#EB1D36' : (data.count < 25 ?'#36AE7C':'#F9D923')) : 'white'}}>
      <div className="left">
        <span className="title" style={{color:data.isCount &&data.colorCode && 'black'}}>{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
        </span>
        {data.link && <span className="link">{data.link}</span>}

        {data.isCount && <span className="count">{data.count} {data.colorCode && <span>/{data.total}</span>} </span>}
      </div>
      {!data.isCount && <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          
        </div>
      </div>}
      {data.icon ? data.icon :null}

    </div>
  );
};

export default Widget;
