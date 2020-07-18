const axios = require('axios')

export const createuser = ()=>{
   return  axios.post('api/createUser', {
       uid:'asdasdasd',
        Name: 'Fred',
        Age: '23'
      })
      .then(function (response) {
        console.log(response.data);
      })
}