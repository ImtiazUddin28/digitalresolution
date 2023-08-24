import httpApi from './http.api'

async function getManagementData() {
  const { data } = await httpApi.get('/public/management')
  return data?.data
}
export default getManagementData
