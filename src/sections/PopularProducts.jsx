import PopularCard from "../components/PopularCard"
import { products } from "../constants"
const PopularProducts = () => {
  return (
    <div>
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-palanquin font-bold ">Our <span className="text-coral-red">Popular</span> Products </h1>
      <p className=" leading-normal font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after <br/> selections. Discover a world of comfort, design, and value</p>
    </div>
    <div className=" grid sm:grid-flow-col max-sm:grid-cols-2 max-sm:gap-4 max-[770px]:gap-4 gap-14 mt-16">
      {products.map((card)=>(
        <PopularCard imgURL={card.imgURL} name={card.name} price={card.price} />
      ))}
    </div>
    </div>
  )
}

export default PopularProducts
