import { useState } from "react"
import ListItem from "./Components/ListItem";
import NewListItemButton from "./Components/NewListltenButton"
import Swal from "sweetalert2";

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
    {
      id: "3",
      name: "Maiz",
      quantity: 10,
      unit: "kg",
      checked: false,
    }
  ]);

  const handleNewListItemButton = () => {
    Swal.fire('Any fool can USE a computer')
  }

  const handleCheckboxChange = (e) => {
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
        <NewListItemButton handleButton={handleNewListItemButton} />
      </div>
    </div>
    <hr />
    {
      listItems.map((listItem) => (
        <ListItem
        id={listItem.id}
        name={listItem.name}
        quantity={listItem.quantity}
        unit={listItem.unit}
        checked={listItem.checked}
        handleCheckboxChange={handleCheckboxChange}
        />
      ) ) 
    }
    <hr />
    <div className="row">
      <div className="col text-end">
      <NewListItemButton handleButton={handleNewListItemButton} />
      </div>
    </div>
  </div>
  )
}

export default App
