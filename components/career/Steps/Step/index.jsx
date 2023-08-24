export default function Step({ number, title, content }) {
  return (
    <div className="bg-white shader p-[36px] flex flex-col items-center rounded-[20px] border-2 ">
      <h1 className="text-[#0C0F18] font-[700] text-[56px]">{number}</h1>
      <h2 className="text-[#0057FF] font-[600] text-[32px]">{title}</h2>
      <p className="mt-[30px] text-[#6E7076] leading-[150%] text-[16px] text-center font-[400]">
        {content}
      </p>
    </div>
  )
}
