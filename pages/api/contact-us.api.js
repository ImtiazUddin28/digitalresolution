import httpApi from './http.api'

export default async function submitForm(userData) {
  const { data } = await httpApi.post('/public/contact-us', userData)
  return data
}
