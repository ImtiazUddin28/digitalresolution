import httpApi from './http.api'

async function getTrustedCompany() {
  const { data } = await httpApi.get('/public/trusted-company')
  return data?.data
}
export default getTrustedCompany
