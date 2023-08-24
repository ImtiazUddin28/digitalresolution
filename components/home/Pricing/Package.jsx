import circle from '@/assets/circle.png'

export default function Package({ service }) {
  const { name, price } = service
  return (
    <>
      <div className="flex justify-between align-middle bottom-1  border-b py-2 ">
        <div className="flex items-center gap-[18px] w-full">
          <img
            className="w-[20px] h-[20px]"
            src={circle.src}
            alt="tic"
          />
          <span className="font-[300] text-[16px] text-start first-letter:capitalize w-[calc(100%-56px)]">
            {name}
          </span>
          <span className="font-bold text-[16px] text-right py-auto ml-auto">
            ${price}
          </span>
        </div>
      </div>
    </>
  )
}
