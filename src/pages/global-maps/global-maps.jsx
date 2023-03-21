import "./global-maps.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import {
  ListAltOutlined,
  SearchOffOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import IndiaMapChart from "../../components/india-colored-map/india-colored-map";
const GlobalMaps = () => {
  let widgetData = [
    {
      title: "SEARCH ACQUIFER",
      isMoney: false,
      link: "Search Acquifer",
      icon: (
        <SearchOutlined
          className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      ),
    },
    {
      title: "WORLD ACQUIFERS",
      isMoney: false,
      link: "View all Acquifers",
      icon: (
        <ListAltOutlined
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      ),
    },
    {
      title: "COUNTRY ACQUIFERS",
      isMoney: false,
      link: "See details",
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      ),
    },
    {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    },
  ];
  let barGraphData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];
  return (
    <div className="globalmaps">
      <Sidebar />
      <div className="globalmapsContainer">
        <Navbar />
        <div className="widgets">
          {widgetData.map((el) => {
            return <Widget data={el} />;
          })}
        </div>
        <div className="a-flex">
          <BarChart width={730} height={250} data={barGraphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
          <IndiaMapChart
            style={{ position: "relative", height: "100px", width: "100px" }}
          />
        </div>
        <PieChart width={730} height={250}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default GlobalMaps;
