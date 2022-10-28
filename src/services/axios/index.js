import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1337/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

apiClient.interceptors.response.use(undefined, (error) => {
  // Errors handling
  const { response } = error;
  const { data } = response;
  if (data) {
    console.log({
      message: data.statusCode + ' ' + data.error,
    });
  }
})

export default apiClient;
