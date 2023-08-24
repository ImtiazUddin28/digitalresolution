import axios from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
}
