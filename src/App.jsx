import { useLoaderData } from "react-router-dom"
import CoffeeCards from "./components/CoffeeCards";
import { useState } from "react";


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees);

  return (
    <>

      <div className="m-20">
        <h1 className='text-6xl text-center text-purple-500 mb-10'>NORTHSTAR COFFEE STORE</h1>
        <h4>Available Coffees: {coffees.length}</h4>
        <div className=" grid md:grid-cols-2 gap-4">
          {
            coffees.map(coffee =><CoffeeCards key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCards>)
          }
        </div>
      </div>
    </>
  )
}

export default App
