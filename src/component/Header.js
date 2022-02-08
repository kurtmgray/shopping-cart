
import { Link } from "react-router-dom";


export default function Header (props) {
    const totalItems = props.cartItems.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)
    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/cart">Cart</Link>
            <p>Items in cart: {totalItems}</p>
        </div>
    )
}
