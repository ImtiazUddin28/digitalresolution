import httpApi from './http.api';

async function getServices() {
  const { data } = await httpApi.get('/public/our-services');
  return data?.data;
}
export default getServices;
