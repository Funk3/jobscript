import axios from 'axios';

export default function aiRequest() {
  const apiKey = process.env.REACT_APP_TOKEN;
  const params = {
    prompt: 'How are you?',
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
      console.log(result.data.choices[0].text);
    })
    .catch((err) => {
      console.log(err);
    });
}
