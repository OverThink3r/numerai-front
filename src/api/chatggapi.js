import axios from "axios";


const apiClient = axios.create({
  baseURL: 'https://numeraai.herokuapp.com/'
})

apiClient.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }
  return config
})

export {
  apiClient
}