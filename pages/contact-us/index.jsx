import Layout from '@/components/layout'
import PageTitle from '@/components/common/PageTitle'
import ContactForm from '@/components/contact-us/ContactForm'

import contactUsBackground from '@/assets/contact-us-page-title-background.jpg'

export default function ContactUs() {
  return (
    <Layout pageTitle="Softex Solution | Contact Us">
      <PageTitle
        title="Contact Us"
        background={contactUsBackground.src}
      />
      <ContactForm />
    </Layout>
  )
}
