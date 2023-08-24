import httpApi from './http.api'

async function getTestimonial() {
    const { data } = await httpApi.get('/public/testimonial')
  return data?.data
}
export default getTestimonial
