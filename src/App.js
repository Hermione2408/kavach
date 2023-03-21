import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import BusDetail from "./pages/busdetail/busdetail";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route ,useLocation } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import "./style/dimension.css";
import "./style/flex.css";
import "./style/styles.css";
import "./App.css"
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import KnowYourAquifer from "./pages/know-your-aquifer";
import GlobalMaps from "./pages/global-maps/global-maps";
import { UserContext } from "./context/userContext";
import Analysis from "./pages/analysis/analysis"
import Survey from "./components/generateSurvey/generateSurvey";
import Admin from "./pages/admin";
import ReportAccident from "./components/AccidentReport/index.js"
import Report from "./components/report/report";
import Report1 from "./components/report1/Report1";
import ReportPage from "./pages/reportPage/ReportPage";
import BottomBar from "./components/BottomBar"
import Assistance from "./pages/Assistance/Assistance";
import UserCards from "./pages/UserCard/UserCard";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MapNavigator from "./components/MapNavigator";
import MechanicsList from "./pages/Mechanic";
import PetrolPumpList from "./pages/PetrolPump";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { userDetails } = useContext(UserContext);
  const value = useContext(UserContext);
  console.log(value, "VAL");
  useEffect(() => {
    let userDetails = localStorage.getItem("userDetails");
    console.log(userDetails, "USER DETAILS");
    if (userDetails) {
      value.dispatch({ type: "SAVE", payload: userDetails });
    }
  }, []);
  const location = {
    address: "Jaipur, Rajasthan",
    latitude: 26.9124,
    longitude: 75.7873,
  };
  return (
    <div>
      <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":busId" element={<BusDetail />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/assistance" element={<Assistance />} />
            <Route path="/report" element={<Report />} />
            <Route path="/report1" element={<Report1 />} />
            <Route path="/reportAccident" element={<ReportAccident />} />
            <Route path="/reportPage" element={<ReportPage />} />
            <Route path="/chauffer" element={<UserCards />} />
            <Route path="/profilepage" element={<ProfilePage />} />

            {/* <Route path="/petrol-pump" element={<PetrolPage />} /> */}

            <Route path="survey" element={<Survey />}></Route>
            <Route path="aquifers" element={<KnowYourAquifer />}></Route>
            <Route path="globalmaps" element={<GlobalMaps />}></Route>
            <Route path="analysis" element={<Analysis />}></Route>
            <Route path="admin" element={<Admin />}></Route>
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
            <Route path="login" element={<Login />}></Route>
            <Route path="/mapNavigation" element={<MapNavigator />}></Route>
            <Route path="/mechanic" element={<MechanicsList />}></Route>
            <Route path="/petrolpumps" element={<PetrolPumpList location={location} />}></Route>

          </Route>
        </Routes>
        <BottomBar  />
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
