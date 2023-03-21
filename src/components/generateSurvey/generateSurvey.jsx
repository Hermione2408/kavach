
import React from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./generateSurvey.scss"
StylesManager.applyTheme("defaultV2");

const surveyJson = {
    elements: [
      {
        name: "contamination",
        title: "Is water contaminated ?",
        type: "boolean"
      },
      {
        name: "supply",
        title: "Is supply of water regular in your area ?",
        type: "boolean"
      },
      {
        name: "reason",
        title: "Any other problem you are facing related to water in your area ?",
        type: "text"
      }
    ]
  };
function SurveyComponent() {
  const survey = new Model(surveyJson);
  return(
    <div className='survey'>
      <Sidebar />
      <div className="surveyContainer">
        <Navbar />
        <div>
        <Survey model={survey}/>

        </div>

      </div>
    </div>
  )

}
export default SurveyComponent;
