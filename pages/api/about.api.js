import httpApi from './http.api';

async function getAboutUs() {
  const { data } = await httpApi.get('/public/about-us');
  return data?.data;
}
export default getAboutUs;
