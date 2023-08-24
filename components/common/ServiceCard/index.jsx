import Image from 'next/image'

export default function ServiceCard({ icon, title, content, color }) {
  return (
    <div className="flex flex-col gap-[24px] bg-white border-2 border-cyan-400 rounded-3xl p-[2rem]">
      <Image
        height={58}
        width={72}
        src={icon}
        alt="Service icon"
      />
      <div className="h-full flex flex-col">
        <h3 className="text-[1.125rem] uppercase font-bold text-black mb-[0.75rem]">
          {title}
        </h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
