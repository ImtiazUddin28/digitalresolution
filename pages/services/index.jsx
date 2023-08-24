import serviceBackground from '@/assets/servicebanner.jpg'
import PageTitle from '@/components/common/PageTitle'
import Layout from '@/components/layout'
import OurServices from '@/components/services/OurServices/OurServices'
import SingleService from '@/components/services/SingleService/SingleService'
import { getOurServices } from '@/endpoints'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['our_services'],
    queryFn: getOurServices,
    staleTime: 300000
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default function Services() {
  const { data } = useQuery({
    queryKey: ['our_services'],
    queryFn: getOurServices,
    staleTime: 300000
  })

  const {
    data: { title, sub_title, content, projects, project_descriptions }
  } = data

  return (
    <Layout pageTitle="Softex Solution | Services">
      <PageTitle
        subtitle={sub_title}
        title={title}
        background={serviceBackground.src}
        brief={content}
      />
      <OurServices projects={projects}></OurServices>
      <SingleService project_descriptions={project_descriptions} />
    </Layout>
  )
}
