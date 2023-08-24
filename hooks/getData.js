import axios from 'axios'

const useGetData = (url) => {
  axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`).then((res) => {
    return res.data
  })
}
export default useGetData

