import httpApi from './http.api';

async function applyJob(body) {
  const { data } = await httpApi.post('/public/job-applicant', body);
  return data?.data;
}
export default applyJob;
