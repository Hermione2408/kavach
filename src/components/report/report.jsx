import React from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import "./report.scss"

StylesManager.applyTheme("defaultV2");

const reportJson = {
  title: "Report",
    description: "Please take look at the survey title and logo. Test the settings on the right panel ->",
    elements: [
      {
        name: "Location",
        title: "What is the exact location of the damaged road?",
        type: "text",
        isRequired: "true"

      },
      {
        name: "Description of the problem",
        title: "Can you describe the problem with the road? For example, is it pothole, cracked, uneven, or blocked?",
        type: "dropdown",
        choices: [
          "Potholes on the roads",
          "Aquaplaning during a rainfall",
          "Item 3"
         ]
     },
      
      {
       name: "date",
        type: "text",
        title: "When did you observe the issue with the road?",
        inputType: "date",
        defaultValueExpression: "today()",
        minValueExpression: "today()",
        isRequired: true
      },
      {
        name: "Images or videos",
        title: "Can you provide any images or videos that show the condition of the road?",
        type: "file",
        storeDataAsText: false,
        showPreview: true,
        imageWidth: 150,
        maxSize: 102400
      },   
      {
        name: "Vehicle information",
        title: "Were you driving a vehicle when you encountered the problem with the road? If so, can you provide the make, model, and license plate number of the vehicle?",
        type: "text"
      },
      {
        name: "Impact on traffic",
        title: "How has the condition of the road impacted traffic flow and safety?",
        type: "radiogroup",
      isRequired: true,
      showNoneItem: true,
      showOtherItem: true,
      colCount: 1,
     choices: [ "very bad", "bad", "good"],
      separateSpecialChoices: true,
      showClearButton: true
      },
      {
        name: "Additional comments",
        title: "Do you have any additional comments or observations about the road or the situation?",
        
      },
    ]
  };
 const submitData=(data)=>{
  console.log(data)
  handleSubmit(data)
 }
 const handleSubmit = async (formD) => {
  const formData = {
    datetime: new Date(),
    location: {
      latitude: 0,
      longitude: 0,
      address: "Test address",
    },
    type: "pothole",
    severity: "low",
    vehiclesInvolved: 0,
    injured: 0,
    fatalities: 0,
    reportedBy: "Ankit",
    additionalInfo: JSON.stringify(formD),
  }
  const response = await fetch("http://localhost:3000/accidents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();
  console.log(data);
};
function Report() {
   
  const report = new Model(reportJson);
  report.onComplete.add((sender, options) => {
    submitData(JSON.stringify(sender.data, null, 3));
});
  return(
   
        <div className="report">
        <Survey className="reportContainer" model={report}/>
        </div>
  )

}
export default Report;
