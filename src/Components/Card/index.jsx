import { useContext } from "react" //with this we can manipulate the context
import { ShoppingCartContext } from "../../Context"
import { PlusIcon } from "@heroicons/react/24/solid"

function Card(data){ //data is the item the card gets as a prop from the api (see home)
    const context = useContext(ShoppingCartContext) //not being a children of the Shopping func we can access de global context like this
    return(
        <div 
        onClick={()=>context.openProductDetail()}
        className="bg-white w-56 h-60 cursor-pointer rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 p-1">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Headphones" />
                <div 
                className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full bg-white m-2 p-1" 
                onClick={()=> context.setCount(context.count + 1)}><PlusIcon/></div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-semibold">{data.data.price}$</span>
            </p>
            
        </div>
    )
}

export default Card