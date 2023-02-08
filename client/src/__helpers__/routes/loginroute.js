import axios from 'axios';

export function login() {
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_SERVER_URL}/account/login`,
    headers: { 'Content-Type': 'application/json' },
    data: {
      email: 'zak@zak.com',
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
