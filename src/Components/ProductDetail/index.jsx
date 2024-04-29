//we use css because we want to add an specific width that tailwind does no allow
// import { XMarkIcon } from '@heroicons/react/24/solid'
import {XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import './style.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside 
    //how to add logic in a className
    //with the ternary conditional we indicate what happen if the bool es true or false
    //with the '' we indicate what to add to the calssName depending what the value of variable is
    className={`${context.isProductDetailOpen? 'flex': 'hidden'}
    product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
      <h2 className=' font-medium text-xl'>Detail</h2>
      <div>
      <XMarkIcon className='w-6 h-6'/>
      </div>
      </div>
    </aside>
  )
}

export default ProductDetail

