export default function Header (props) {
    const totalItems = props.cartItems.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)
    
    return (
        <div>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/cart">Cart</a>
            <p>Items in cart: {totalItems}</p>
        </div>
    )
}
