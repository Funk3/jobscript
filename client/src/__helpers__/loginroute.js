import axios from 'axios';

// export default function login() {
//   const options = {
//     url: `${process.env.REACT_APP_SERVER_URL}/account/login`,
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8',
//     },
//     data: {
//       email: 'zak@zak.com',
//     },
//   };

//   axios(options).then((response) => {
//     console.log(response);
//   });
// }



export default function login() {
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
