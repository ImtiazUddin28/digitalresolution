import httpApi from './http.api'

async function getPricingData() {
  const { data } = await httpApi.get('/public/our-plan')
  return data?.data
}
export default getPricingData