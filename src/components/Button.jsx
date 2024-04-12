

export default function Button({label,iconURL}) {
  return (
    <button className="flex mb-20 justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat text-lg leading-none text-white border-coral-red bg-coral-red">
      {label}
      <img src={iconURL} 
      alt="arrow right icon"
      className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  )
}
