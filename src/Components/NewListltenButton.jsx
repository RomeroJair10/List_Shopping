const NewListItemButton = ({handleButton}) => {
  return (
    <button 
    type="button" 
    className="btn btn-outline-success btn-sm mt-1"
    onClick={handleButton}
    >
      
    <i class="bi bi-plus-circle-fill"></i>
    </button>
  )
}

export default NewListItemButton
