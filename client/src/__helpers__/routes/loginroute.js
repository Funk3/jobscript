import axios from 'axios';

export function login() {
  const login = {
    email: 'zak@zak.com',
    password: 123,
  };

  return axios.post(`/api/users/login`, login)
    .then(res => {
      console.log(res.data)
      return res.data
    });
}
//   axios({
//     method: 'post',
//     url: `${process.env.REACT_APP_SERVER_URL}/api/users/login`,
//     headers: { 'Content-Type': 'application/json' },
//     data: {
//       email: 'zak@zak.com',
//     },
//   }).then(
//     (response) => {
//       console.log(response);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }
