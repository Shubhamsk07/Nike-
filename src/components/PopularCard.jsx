import { star } from "../assets/icons"
function PopularCard({imgURL,name,price}) {
  return (
    <div className="flex flex-col gap-3 max-sm:gap-2">
      <img src={imgURL} alt="shoe collection" />
      <div className="flex gap-3 ">
        <img src={star} alt="star" width={20} height={10} />
        <p className="text-slate-gray text-xl font-montserrat max-sm:text-lg">(4.5)</p>
      </div>
      <h2 className="font-semibold text-2xl font-palanquin max-sm:text-xl">{name}</h2>
      <p className="text-2xl font-montserrat font-semibold text-coral-red max-sm:text-xl">{price}</p>
    </div>
  )
}

export default PopularCard
