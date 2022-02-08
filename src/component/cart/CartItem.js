export default function CartItem (props) {
    return (
        <div className="cart-item">
            <img src={props.img} alt='' id={props.id}></img>
            <h3>{props.brand} {props.model} {props.size}</h3>
            <h3>{props.price}</h3>
            <button onClick={props.updateQuantity} id={props.id} name='decrement'>-</button>
            <input 
                type="text" 
                onChange={props.updateQuantity} 
                id={props.id} 
                max={props.stock}
                min='1'
                value={props.quantity} 
                >    
            </input>
            <button onClick={props.updateQuantity} id={props.id} name='increment'>+</button>
            <button onClick={props.removeItem} id={props.id}>Remove Item</button>
        </div>
    )
}