export default function CartItem (props) {
    const handleQuantityClick = (e) => {
        props.handleUpdateQuantity(e.target.id, e.target.name)
    }

    const handleRemoveClick = (e) => {
        console.log(e.target.id)
        props.handleRemoveItem(e.target.id)
    }
    
    return (
        <div className="cart-item">
            <img src={props.img} alt=''></img>
            <h3>{props.brand} {props.model} {props.size}</h3>
            <h3>{props.price}</h3>
            <p>In stock: {props.stock}</p>
            <button onClick={handleQuantityClick} id={props.id} name='decrement'>-</button>
            <input 
                type="text" 
                id={props.id} 
                max={props.stock}
                min='1'
                size="4"
                name="text"
                textalign="center"
                value={props.quantity}
                readOnly 
                >    
            </input>
            <button onClick={handleQuantityClick} id={props.id} name='increment'>+</button>
            <button onClick={handleRemoveClick} id={props.id}>Remove Item</button>
        </div>
    )
}