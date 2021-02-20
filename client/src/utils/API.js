import axios from 'axios';

export default {
  getSubs: function () {
    return axios.get('/api/subs');
  },
  deleteSubs: function () {
    return axios.delete('/api/subs/' + id);
  },
  saveSubs: function (subsData) {
    return axios.post('/api/subs', subsData);
  },
  updateSubs: function (updateInfo) {
    return axios.post('/api/subs/' + id, updateInfo);
  },
  getUser: function () {
    return axios.get('/api/user');
  },
  updateUser: function (updateInfo) {
    return axios.post('/api/user/' + id, updateInfo);
  },
  saveUser: function (userData) {
    console.log(userData);

    return axios.post('http://localhost:3000/api/user', userData);
  },
  deleteUser: function () {
    return axios.delete('/api/user' + id);
  },
};
