import React from 'react';
import axios from 'axios';

import { useCoverLetterContext } from 'providers/CoverLetterProvider';
import { useResumeContext } from 'providers/ResumeProvider';
import { useAuthContext } from 'providers/AuthProvider';

export default function JobListItem(props) {
  const { coverLetterText } = props;
  const { handleChange } = useCoverLetterContext();
  const { setUploadedFile } = useResumeContext();
  const { user } = useAuthContext();

  useEffect(() => {
    axios.post(`api/joblist/pullResume`, user).then((res) => {
      //const data = res.data;
      setUploadedFile(res.data);
    });
  }, []);

  //console.log("job list item props", props);
  //incomong props = jobTitle and companyName

  return (
    <button onClick={() => handleChange(coverLetterText)}>
      <h3> {props.jobTitle}</h3>
      <h4> {props.companyName}</h4>
    </button>
  );
}
