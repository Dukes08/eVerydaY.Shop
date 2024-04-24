import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import React from 'react'
import Navbar from '../../Components/Navbar'
import ShoppingCartProvider from '../../Context'

function AppRoutes (){
  let routes;
  return (
     routes = useRoutes(
      [
        {path:'/', element:<Home />},
        {path:'/my-account', element:<MyAccount />},
        {path:'/my-order', element:<MyOrder />},
        {path:'/my-orders', element:<MyOrders />},
        {path:'/sign-in', element:<SignIn />},
        {path:'/*', element:<NotFound />},
        

     ]
    )
  )
}

function App(){
  return(
  <ShoppingCartProvider>
    <BrowserRouter>
    <AppRoutes/>
    <Navbar/>
    </BrowserRouter>
  </ShoppingCartProvider>
  )
}

export default App
