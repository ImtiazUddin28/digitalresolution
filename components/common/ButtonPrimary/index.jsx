export default function ButtonPrimary({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#e1520a] rounded-[35px] py-[13px] px-[31px] text-[16px] font-semibold text-white"
    >
      {text}
    </button>
  );
}
