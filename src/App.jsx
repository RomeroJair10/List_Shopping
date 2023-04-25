import { useState } from "react"
import ListItem from "./Components/ListItem";
import NewListItemButton from "./Components/NewListltenButton"
import Swal from "sweetalert2";
import ClearListButton from "./Components/ClearListButton";

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
    },
    {
      id: "4",
      name: "coca cola",
      quantity: 5,
      unit: "ml",
      checked: false,
    }
  ]);

  const handleNewListItemButton = async() => {
    const {value} = await Swal.fire({
      title: "New Item information",
      html: `<input 
              tipe='text' 
              id='name' 
              name='name' 
              class='swal2-input' 
              placeholder='Item' 
             />
             <input 
             tipe='text' 
             id='quantity' 
             name='quantity' 
             class='swal2-input' 
             placeholder='Qt' 
            />
            <input 
              tipe='text' 
              id='unit' 
              name='unit' 
              class='swal2-input' 
              placeholder='unit' 
             />`,


      confirmButtonText: "Add item",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Dismiss",
      preConfirm: () => {
        const name= Swal.getPopup().querySelector('#name').value;
        const quantity= Swal.getPopup().querySelector('#quantity').value;
        const unit= Swal.getPopup().querySelector('#unit').value
        if (!name || !quantity || !unit) {
          Swal.showValidationMessage('Please enter an item name');
        }
        return{name, quantity, unit};
      },
    })

    if(!value.name || !value.quantity || !value.unit) return

    setListItems([
      ...listItems,
      {id: (listItems.length+1).toString(), ...value, checked:false}
    ])

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
        <ClearListButton setListItems={setListItems}/>
        <NewListItemButton handleButton={handleNewListItemButton} />
      </div>
    </div>
    <hr />
    {
      listItems.map((listItem) => (
        <ListItem
        item={listItem}
        listItems={listItems}
        setListItems={setListItems}
        handleCheckboxChange={handleCheckboxChange}
        />
      ) ) 
    }
    <hr />
    <div className="row">
      <div className="col text-end">
        <ClearListButton setListItems={setListItems}/>
      <NewListItemButton handleButton={handleNewListItemButton} />
      </div>
    </div>
  </div>
  )
}

export default App
