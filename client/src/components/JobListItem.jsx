import React from "react";
import { useCoverLetterContext } from "providers/CoverLetterProvider";
export default function JobListItem(props) {

  const { coverLetterText} = props;
  const {handleChange} = useCoverLetterContext();

  //console.log("job list item props", props);
  //incomong props = jobTitle and companyName

  return (
    <button onClick={()=> handleChange(coverLetterText)}>
      <h3> {props.jobTitle}</h3>
      <h4> {props.companyName}</h4>
    </button>
  );
}
