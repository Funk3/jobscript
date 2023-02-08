import axios from 'axios';

//import {useCoverLetterContext} from '../../providers/CoverLetterProvider';

export default function aiRequest(resumeInput, jobDescInput, toneInput, lengthInput) {
  //console.log(resumeInput, jobDescInput, toneInput, lengthInput);

  //const {handleChange} = useCoverLetterContext();

  //console.log(`Write a cover letter for the following job: "${jobDescInput}". Use this resume : "${resumeInput}". ${toneInput} ${lengthInput}`);
  
  const apiKey = process.env.REACT_APP_TOKEN;
  const params = {
    prompt: `Write a cover letter for the following job: "${jobDescInput}". Use this resume : "${resumeInput}". ${toneInput} ${lengthInput}`,
    model: 'text-davinci-003',
    max_tokens: 2000,
    temperature: 0,
  };

  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };

  axios
    .post('https://api.openai.com/v1/completions', params, {
      headers: headers,
    })
    .then((result) => {
      console.log("API response = ", result.data.choices[0].text)
      //handleChange(result.data.choices[0].text);
    })
    .catch((err) => {
      console.log(err.request.response);
      console.log(err.config.data);
      console.log(err);
    });
}
