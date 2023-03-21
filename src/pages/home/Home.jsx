import "./home.scss";
import { useContext, useState, useEffect} from "react";
import { UserContext } from "../../context/userContext";
import AccidentReportModal from "../../components/AccidentReport";
import { useNavigate, useLocation} from "react-router-dom";
import HomeMap from "../../components/HomeMap";
const Home = () => {
  const { userDetails,showLogin } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAccidentModal,setShowAccidentModal] = useState(true)
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    let from = location.state?.from?.pathname;
    let isReportVisited = window.localStorage.getItem('reportAccidentVisited')
    if(!isReportVisited){
      navigate('/reportAccident')
    }
    return (()=>{
      window.localStorage.clear()
    })
  }, []);
  return (
    <>
    <div className='map-container'>
      <HomeMap />
    </div>
    </>
    
  );
};

export default Home;
