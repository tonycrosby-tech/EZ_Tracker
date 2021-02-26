import axios from 'axios';

export default {
//   getSubs: function () {
//     return axios.get('/api/subs');
//   },
  deleteSubs: function (id) {
    return axios.delete('/api/auth/deleteSubscription/' + id);
  },
  // saveSubs: function (subsData) {
  //   console.log(subsData);
  //   return axios.post('/api/auth/subscription', { subsData });
  // },
//   updateSubs: function (updateInfo) {
//     return axios.post('/api/subs/' + id, updateInfo);
//   },
  // getUser: function () {
  //   return axios.get('/api/user/');
  // },
//   updateUser: function (updateInfo) {
//     return axios.post('/api/user/' + id, updateInfo);
//   },
//   saveUser: function (userData) {
//     console.log(userData);

//     return axios.post('http://localhost:3001/api/auth/register', userData);
//   },
//   deleteUser: function () {
//     return axios.delete('/api/user' + id);
//   },
};
