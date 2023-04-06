interface InputProps {
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  placeholder, 
  value, 
  type,
  disabled,
  onChange
}: InputProps) => {
  return (
    <input 
      className="
        w-full
        p-4
        text-lg
        bg-black
        border-2
        border-neutral-800
        rounded-md
        outline-none
        text-white
        focus:border-sky-500
        focus:border-2
        transition
        disabled:bg-neutral-900
        disabled:opacity-30
        disabled:cursor-not-allowed
      "
      type={type} 
      value={value} 
      placeholder={placeholder} 
      onChange={onChange} 
      disabled={disabled} />
  )
}

export default Input