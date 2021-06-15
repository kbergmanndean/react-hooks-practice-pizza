import React,{useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas,setPizzas]=useState([])
  const [editTopping, setEditTopping]=useState("")
  const [editSize, setEditSize]=useState("Small")
  const [editVeg, setEditVeg]=useState(null)
  const [editId, setEditId]=useState(null)

  useEffect(()=>{
    fetch("http://localhost:3001/pizzas")
    .then((resp)=>resp.json())
    .then(data=>setPizzas(data))
  },[])

  function handleEdit(pizza){
    setEditTopping(pizza.topping)
    setEditSize(pizza.size)
    setEditVeg(pizza.vegetarian)
    setEditId(pizza.id)
  }

  function handleSubmit(event){
    event.preventDefault();
    const editedPizza={topping:editTopping, size:editSize, vegetarian:editVeg}
    fetch( `http://localhost:3001/pizzas/${editId}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(editedPizza)
    }).then(resp=>resp.json())
  }
  //it renders new pizza when you refresh page but not before.
  

  return (
    <>
      <Header />
      <PizzaForm 
      handleSubmit={handleSubmit}
      editTopping={editTopping} 
      editSize={editSize} 
      editVeg={editVeg}
      setEditTopping={setEditTopping}
      setEditVeg={setEditVeg}
      setEditSize={setEditSize}
      />
      <PizzaList handleEdit={handleEdit} pizzas={pizzas} />
    </>
  );
}

export default App;
