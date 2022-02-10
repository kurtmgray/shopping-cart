import CartItem from "./cart/CartItem"

export default function Cart (props) {

    return (
        <div>
            <h1> Your Cart </h1>
            {props.cart.length === 0 ? <h3>Your cart is empty.</h3> :
                props.cart.map(item => 
                    <CartItem 
                        key={item.id}
                        id={item.id}
                        img={item.imgSmall}
                        brand={item.brand}
                        model={item.model}
                        size={item.size}
                        price={item.price}
                        quantity={item.quantity}
                        stock={item.stock}
                        handleUpdateQuantity={props.handleUpdateQuantity}
                        handleRemoveItem={props.handleRemoveItem}
                    />
                )
            }
            <h3>Subtotal: ${props.subtotal}</h3>
        </div>    
    )
}