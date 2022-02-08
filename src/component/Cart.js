import CartItem from "./cart/CartItem"

export default function Cart (props) {
    const updateQuantity = (event) => {
        props.setCartItems(([prevCart, prevSub]) => {
            let newCart = [...prevCart]
            const index = prevCart.findIndex(item => item.id === event.target.id)
            
            if (event.target.name === 'increment'){
                console.log('increment')
                if (prevCart[index].quantity === prevCart[index].stock) {
                    console.log('cant add, max reached')
                } else {
                    newCart = [
                        ...prevCart.splice(
                            index,
                            1,
                            {...prevCart[index], quantity: prevCart[index].quantity + 1}
                        )    
                    ]
                }
            } else if (event.target.name === 'decrement'){
                console.log('decrement')
                if (prevCart[index].quantity === 1){

                } else {
                    newCart = [
                        ...prevCart.splice(
                            index,
                            1,
                            {...prevCart[index], quantity: prevCart[index].quantity - 1}
                        )    
                    ]
                }   
            } else {
                newCart = [
                    ...prevCart.slice(0, index),
                    {...prevCart[index], quantity: event.target.value},
                    ...prevCart.slice(index)
                ]
            }
            
            const newSub = newCart.reduce((acc, curr) => 
                acc + (curr.price * curr.quantity),0)
            return [newCart, newSub]
        })
    }

    const removeItem = (event) => {
        props.setCartItems(([prevCart, prevSub]) => {
            const index = prevCart.findIndex(item => item.id === event.target.id)
            let newCart = [...prevCart] 
            newCart = [prevCart.splice([index], 1)]
            const newSub = props.newCart.reduce((acc, curr) => 
                acc + (curr.price * curr.quantity),0
            )
            return [newCart, newSub]
        })  
    }

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
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                    />
                )
            }
            <h3>Subtotal: ${props.subtotal}</h3>
        </div>    
    )
}