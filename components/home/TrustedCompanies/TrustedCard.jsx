import Image from 'next/image'

const TrustedCard = ({ partner }) => {
  return (
    <div className="w-full">
      <Image
        className='w-[12rem] h-[3rem]'
        src={`${process.env.NEXT_PUBLIC_IMAGE}/${partner.logo}`}
        alt={partner?.alt}
        height={100}
        width={100}
      />
    </div>
  )
}

export default TrustedCard
