import { useState } from "react"

function App() {
  const [listItems, setListItems] = useState([
    {
      id: "1",
      name: "Tortillas",
      quantity: 2,
      unit: "Kg",
      checked: false,
    },
    {
      id: "2",
      name: "Aceite",
      quantity: 900,
      unit: "ml",
      checked: false,
    },
  ]);

  const handleCheckboxChanhe = (e) => {
    const newList = listItems.map(item => {
      if (item.id === e.target.name) {
        item.checked = !item.checked;
      }

      return item;

    })
    setListItems(newList);
  }

  return (
    <div className="container text-center">
    <div className="row">
      <div className="col-2"></div>
      <div className="col">
       <h1>Shopping List</h1>
       <br />
      </div>
      <div className="col-2 text-end">
        <button type="button" className="btn btn-outline-success btn-sm mt-1">
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-1">
        <input 
          type="checkbox"
          name={listItems[0].id}
          onChange={(e)=>handleCheckboxChanhe(e)}
          checked={listItems[0].checked} 
        />
      </div>
      <div className="col text-start">
      {
      listItems[0].checked ?
      <s>{`${listItems[0].quantity} ${listItems[0].unit}`}</s> : 
      `${listItems[0].quantity} ${listItems[0].unit}`
      }
      </div>
      <div 
      className="col-5 col-md-7 text-start" 
      style={{textDecoration: listItems[0].checked && "line-through"}}
      >
      {`${listItems[0].name}`}
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm text-end" role="group">
        <button className="btn btn-outline-primary">
          <i className="bi bi-pencil-square"></i>
          </button>
        <button className="btn btn-outline-info">
          <i className="bi bi-files"></i>
          </button>
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
          </button>
      </div>
    </div>
    <div className="row">
      <div className="col-1">
        <input 
        type="checkbox"
        name={listItems[1].id}
        onChange={(e)=>handleCheckboxChanhe(e)}
        checked={listItems[1].checked}  
        />
      </div>
      <div className="col text-start">
      {listItems[1].checked ?
      <s>{`${listItems[1].quantity} ${listItems[1].unit}`}</s> : 
      `${listItems[1].quantity} ${listItems[1].unit}`
    }
      </div>
      <div className="col-5 col-md-7 text-start"
       style={{textDecoration: listItems[1].checked && "line-through"}}
      >
        {`${listItems[1].name}`}
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm text-end" role="group">
        <button className="btn btn-outline-primary">
          <i className="bi bi-pencil-square"></i>
          </button>
        <button className="btn btn-outline-info">
          <i className="bi bi-files"></i>
          </button>
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
          </button>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col text-end">
      <button type="button" className="btn btn-outline-success btn-sm mt-1">
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
