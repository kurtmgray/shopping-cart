import CartItem from "./cart/CartItem"
import products from "../assets/products"

export default function Cart (props) {
    const cartProducts = props.cartItems.map(item => 
        products.find(product => product.id === item.id)
    )
    
    return (
        <div>
            <h1> Your Cart </h1>
            {props.cartItems.length === 0 ? <h3>Your cart is empty.</h3> :
                cartProducts.map(product => 
                    <CartItem 
                        key={product.id}
                        id={product.id}
                        img={product.imgSmall}
                        brand={product.brand}
                        model={product.model}
                        size={product.size}
                        price={product.price}
                    />
                )
            }
            <h3>Subtotal: {props.subtotal}</h3>
        </div>    
    )
}