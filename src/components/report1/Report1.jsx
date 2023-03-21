import React from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import "./report1.scss"
StylesManager.applyTheme("defaultV2");


const reportJson = {
    title: "Report",
    description: "Please take look at the survey title and logo. Test the settings on the right panel ->",
    elements: [
      {
        name: "Location",
        title: "Specify the location of the incident",
        type: "text",
        isRequired: "true"

      },
      {
        name: "Description of the problem",
        title: "Select the violation of law",
        type: "dropdown",
        choices: [
           "Rash driving",
          "Overspeeding",
           "Without Helmet",
            "Tripling",
             "Drunk and Drive",
            "Calling while Driving",
           "Jump Signals",
            "Parking in NO Parking",
            "Overloading"
         ]
     },
      
      {
       name: "date",
        type: "text",
        title: "When did you observe the violation of the law?",
        inputType: "date",
        defaultValueExpression: "today()",
        minValueExpression: "today()",
        isRequired: true
      },
      {
        name: "Images or videos",
        title: "Can you provide any clear images or videos that show the violation of the law?",
        type: "file",
        storeDataAsText: false,
        showPreview: true,
        imageWidth: 150,
        maxSize: 102400
      },   
      {
        name: "Vehicle information",
        title: "Can you provide the make, model, and license plate number of the vehicle?",
        type: "text"
      },
      {
        name: "Additional comments",
        title: "Do you have any additional comments or observations about the situation?",
        
      },
    ]
  };
 const submitData=(data)=>{
  console.log(data)
 }
function Report1() {
   
  const report1 = new Model(reportJson);
  report1.onComplete.add((sender, options) => {
    submitData(JSON.stringify(sender.data, null, 3));
});
  return(
   
        <div className="report">
        <Survey className="reportContainer" model={report1}/>
        </div>
  )

}
export default Report1;
