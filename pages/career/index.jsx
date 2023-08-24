import { QueryClient, dehydrate } from '@tanstack/react-query'

import { getBenefits } from '@/endpoints'

import Layout from '@/components/layout'
import PageTitle from '@/components/common/PageTitle'
import MainBG from '@/assets/career-bg.jpg'
import Steps from '@/components/career/Steps'
import Benefits from '@/components/career/Benefits'
import Positions from '@/components/career/Positions'
import Gallary from '@/components/career/Gallary'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['benefits'],
    queryFn: getBenefits,
    staleTime: 300000
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default function Career() {
  return (
    <Layout pageTitle={'Softex Solution | Career'}>
      <PageTitle
        title="Join our team"
        background={MainBG.src}
      />
      <Steps />
      <Benefits />
      <Positions />
      <Gallary />
    </Layout>
  )
}
