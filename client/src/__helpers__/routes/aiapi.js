import axios from 'axios';

//import {useCoverLetterContext} from '../../providers/CoverLetterProvider';

export default function aiRequest(resumeInput, jobDescInput, toneInput) {
  //console.log(resumeInput, jobDescInput, toneInput, lengthInput);

  //const {handleChange} = useCoverLetterContext();

  //console.log(`Write a cover letter for the following job: "${jobDescInput}". Use this resume : "${resumeInput}". ${toneInput} ${lengthInput}`);
  
  const apiKey = process.env.REACT_APP_TOKEN;
  const params = {
    prompt: `RESUME = "${resumeInput}". JOB DESCRIPTION = "${jobDescInput}". Use only the information from the RESUME to write a Cover Letter based on the JOB DESCRIPTION. ${toneInput}`,
    model: 'text-davinci-003',
    max_tokens: 2000,
    temperature: 0,
  };

  const headers = {
    Authorization: 'Bearer ' + apiKey
  };

  return axios
    .post('https://api.openai.com/v1/completions', params, {
      headers: headers,
    })
    .then((result) => {
      console.log("API response = ", result.data.choices[0].text)
      return result.data.choices[0].text;
    })
}
