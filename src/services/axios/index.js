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
  if (data && data.errors) {
    console.log({
      message: data.errors.msg,
    });
  }
})

export default apiClient;
