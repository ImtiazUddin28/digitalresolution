export default function InputField({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
  required,
  children
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-[2rem]">
        {label && (
          <label
            htmlFor={id}
            className="block text-[1.5rem] font-bold text-black"
          >
            {label}
            {required && (
              <span className="text-[rgba(255,0,0,1)] ml-[1rem]">
                *
              </span>
            )}
          </label>
        )}
        {children}
      </div>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-[rgba(245,247,248,1)] p-[1.5rem] focus:outline-none ${className}`}
      />
    </>
  )
}
