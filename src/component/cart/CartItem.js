export default function CartItem (props) {
    // need qty in state?
    let qty = 1
    const increment = () => qty += 1
    const decrement = () => qty -= 1

    return (
        <div class="cart-item">
            <img src={props.img} alt='' id={props.id}></img>
            <h3>{props.brand} {props.model} {props.size}</h3>
            <h3>{props.price}</h3>
            <button onClick={decrement}>-</button>
            <input type="text" value={qty}>{qty}</input>
            <button onClick={increment}>+</button>
        </div>
    )
}