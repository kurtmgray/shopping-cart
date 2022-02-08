export default function CartItem (props) {
    return (
        <div className="cart-item">
            <img src={props.img} alt='' id={props.id}></img>
            <h3>{props.brand} {props.model} {props.size}</h3>
            <h3>{props.price}</h3>
            <button onClick={props.updateQuantity} name='increment'>-</button>
            <input type="text" onChange={props.onChange} value={props.quantity}>{props.quantity}</input>
            <button onClick={props.updateQuantity} name='decrement'>+</button>
        </div>
    )
}