import { Slide } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./analysis.scss";
import MlImage1 from "../../assets/imgs/output.png"
import MlImage2 from "../../assets/imgs/output2.png"
import MlImage3 from "../../assets/imgs/output3.png"
import MlImage4 from "../../assets/imgs/output4.png"

function Analysis() {
    const imageHeight="500px"
    const imageWidth = "600px"
    return (
        <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className='a-flex a-fdc'>
        <div className='a-flex'>
            <img Src={MlImage1} height={imageHeight} width={imageWidth} />
            <img className='rightimages' Src={MlImage2} height={imageHeight} width={imageWidth}  />
        </div>
        <div className='a-flex'>
            <img Src={MlImage3} height={imageHeight} width={imageWidth} />
            <img className='rightimages' Src={MlImage4} height={imageHeight} width={imageWidth} />
        </div>
        </div>
        </div>
        </div>
      );
}

export default Analysis;