import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-rn-otp.cloudfunctions.net';
axios.defaults.headers.post['Content-Type'] = 'application/json';
