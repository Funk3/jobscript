import axios from 'axios';

export function login() {
  const login = {
    email: 'zak@zak.com',
    password: 123,
  };

  return axios.post(`/api/users/login`, login)
    .then(res => {
      //console.log(res.data)
      return res.data
    });
}
