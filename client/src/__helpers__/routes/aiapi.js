import axios from 'axios';

export default function aiRequest(resumeInput, jobDescInput, toneInput, lengthInput) {
  //console.log(resumeInput, jobDescInput, toneInput, lengthInput);

  // console.log(`Write a cover letter for the following job: "${jobDescInput}". Use this resume : "${resumeInput}". ${toneInput} ${lengthInput}`);
  
  const apiKey = process.env.REACT_APP_TOKEN;
  const params = {
    prompt: `say hello in french`,
    model: 'text-davinci-003',
    max_tokens: 10,
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
      console.log("API response = ", result.data.choices[0].text);
    })
    .catch((err) => {
      console.log(err);
    });
}
