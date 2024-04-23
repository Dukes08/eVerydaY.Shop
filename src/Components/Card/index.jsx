function Card(){
    return(
        <div className="bg-white w-56 h-60 cursor-pointer rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 p-1">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full bg-white m-2 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">HeadPhones</span>
                <span className="text-lg font-semibold">300$</span>
            </p>
            
        </div>
    )
}

export default Card