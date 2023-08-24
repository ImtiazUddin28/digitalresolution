import httpApi from './http.api'

async function getCaseStudies() {
  const { data } = await httpApi.get('/public/case-study')
  return data?.data
}
export default getCaseStudies