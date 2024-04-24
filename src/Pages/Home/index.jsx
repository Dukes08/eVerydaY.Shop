import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"

function Home(){
  const [items, setItems] = useState();
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => setItems(data)) //with setItems(date), we are passing the products(date) to the state
  },[])

  return(
    <Layout className="">
      Home
     <div className=" grid gap-4 grid-cols-3 w-full max-w-screen-lg ml-20 mt-4">
     {
        items?.map( item => (
        <Card key = {item.id} data = {item} /> //data is the prop that Card needs to render items, key is just for identify each item
          )
        ) 
      }
     </div>
      
 
    </Layout>
  )
}

export default Home
