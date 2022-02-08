import CartItem from "./cart/CartItem"
import products from "../assets/products"

export default function Cart (props) {
    const cartProducts = props.cartItems.map(item => 
        products.find(product => product.id === item.id)
    )
    const updateQuantity = (event) => {
        props.setCartItems(prevItems => {
            const index = prevItems.findIndex(item => item.id === event.target.id)
            let newCart
            if (event.target.name === 'increment'){
                newCart = [
                    ...prevItems.slice(0, index),
                    {...prevItems[index], quantity: prevItems[index].quantity += 1 },
                    ...prevItems.slice(index)
                ]
                return newCart
            } else if (event.target.name === 'decrement'){
                newCart = [
                    ...prevItems.slice(0, index),
                    {...prevItems[index], quantity: prevItems[index].quantity -= 1 },
                    ...prevItems.slice(index)
                ]
                return newCart
            } else {
                newCart = [
                    ...prevItems.slice(0, index),
                    {...prevItems[index], quantity: event.target.value},
                    ...prevItems.slice(index)
                ]
                return newCart 
            }    
        })
    }


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
                        updateQuantity={updateQuantity}
                    />
                )
            }
            <h3>Subtotal: {props.subtotal}</h3>
        </div>    
    )
}