import axios from 'axios'

const useGetData = (url) => {
  axios.get(`${process.env.}/${url}`).then((res) => {
    return res.data
  })
}
export default useGetData

