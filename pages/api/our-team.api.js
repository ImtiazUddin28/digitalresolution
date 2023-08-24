import httpApi from './http.api'

export default async function getOurTeam() {
  const { data } = await httpApi.get('/public/our-team')
  return data?.data
}
