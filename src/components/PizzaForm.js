import React from "react";

function PizzaForm({handleSubmit,editTopping,editSize,editVeg, setEditTopping,setEditSize,setEditVeg}) {

  function handleTopping(event){
    setEditTopping(event.target.value)
  }

  function handleSize(event) {
    setEditSize(event.target.value)
  }

  function handleVeg(){
    setEditVeg(true)
  }
  function handleNotVeg(){
    setEditVeg(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={editTopping}
            onChange={handleTopping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={editSize} onChange={handleSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input checked={editVeg? true: false} onChange={handleVeg}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input checked={!editVeg? true: false} onChange={handleNotVeg}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
