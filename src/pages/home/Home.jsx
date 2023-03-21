import "./home.scss";
import { useContext, useState, useEffect} from "react";
import { UserContext } from "../../context/userContext";
import AccidentReportModal from "../../components/AccidentReport";
import { useNavigate, useLocation} from "react-router-dom";
import HomeMap from "../../components/HomeMap";
import localForage from "localforage";

const Home = () => {
  const { userDetails,showLogin } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAccidentModal,setShowAccidentModal] = useState(true)
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    let from = location.state?.from?.pathname;
    localForage.getItem("reportAccidentVisited").then(value => {
      if (!value) {
        navigate("/reportAccident");
      }
    });
    return () => {
      localForage.clear();
    };
  }, []);
  return (
    <>
      <div className="map-container">
        <HomeMap />
      </div>
    </>
  );
};

export default Home;