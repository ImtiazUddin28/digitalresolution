import ButtonPrimary from '@/components/common/ButtonPrimary'
import CaseCard from './CaseCard'
import CaseHead from './CaseHead'
import case01 from '@/assets/case01.png'
import case02 from '@/assets/case02.png'
import case03 from '@/assets/case03.png'
import case04 from '@/assets/case04.png'

const Case = () => {
  return (
    <section className="my-20 container mx-auto px-3">
      <CaseHead />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-6 mx-auto my-20">
        <CaseCard
          title={
            '24/7 Technical Website - Never worry about downtime again for your business'
          }
          text={
            ' Enjoy peace of mind with round-the-clock support from our highly trained IT experts and get best solution for your curious.'
          }
          pic={case01}
        />
        <CaseCard
          title={
            ' Proactive monitoring and maintenance App - Stay ahead of technical issues'
          }
          text={
            'Prevent problems before they happen with our comprehensive monitoring and maintenance services. '
          }
          pic={case02}
        />
        <CaseCard
          title={
            ' Customized solution Web app - meet your unique business recommended needs'
          }
          text={
            ' Get tailored support that fits your specific requirements and ensures optimal performance and business recommended needs.'
          }
          pic={case03}
        />
        <CaseCard
          title={
            ' Digital marketing - Get back to business quickly with sharp steps'
          }
          text={
            'Digital marketing - Get back to business quickly with sharp steps '
          }
          pic={case04}
        />
      </div>
    </section>
  )
}

export default Case
