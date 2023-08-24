export default function Status({ title, value }) {
  return (
    <div className="text-center">
      <span className="text-[#21293C] font-semibold text-[40px]">{value}</span>
      <p className="font-normal text-[16px] text-[#80888F]">{title}</p>
    </div>
  )
}
