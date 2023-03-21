import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Acquifer near you</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={83} text={"83%"} strokeWidth={5} />
        </div>
        <p className="title">Total readings today</p>
        <p className="amount">3400 Kilolitres</p>
        <p className="desc">
          Previous readings processing. Last readings may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Quality Index</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">84</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Depth</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">500ft</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Increase</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">0.2%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
