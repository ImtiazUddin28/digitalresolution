import httpApi from './http.api'

async function getBenefits() {
  const { data } = await httpApi.get('/public/benefit')
  return data?.data
}
export default getBenefits
