import React, {useState, useReducer} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Product from './components/Product'
import Cart from './components/Cart'
import Header from './components/Header'
import products from './assets/products'

const ACTIONS = {
    ADD_ITEM: 'add-item',
    UPDATE_QUANTITY: 'update-quantity',
    REMOVE_ITEM: 'remove-item'
}

function reducer([cart, subtotal], action) {
    let newCart = []
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            newCart = addCartItem(action.payload.id, cart)
            return [newCart, calculateSubtotal(newCart)]
        case ACTIONS.UPDATE_QUANTITY:
            newCart = updateQuantity(action.payload.id, action.payload.name, cart)
            return [newCart, calculateSubtotal(newCart)]    
        case ACTIONS.REMOVE_ITEM:
            newCart = removeItem(action.payload.id, cart)
            console.log(newCart)
            return [newCart, calculateSubtotal(newCart)]
        default:
            return [cart, subtotal]
    }
}

const addCartItem = (id, cart) => {
    let newCart = [...cart]
    
    // check to see if the wanted item is already in the array, and if the quantity is at max stock
    // return prevCart if so
    const itemInCart = cart.find(item => item.id === id)
    if (itemInCart && itemInCart.quantity === itemInCart.stock){
        console.log('max stock')
        // do nothing
    
    // if it's in the cart, but doesnt meet the above condition, increment the quantity by 1
    } else if (cart.find(item => item.id === id)) {
        console.log('add 1')
        const index = cart.findIndex(item => item.id === id)
        newCart = [
            ...cart.slice(0, index),
            {...cart[index], quantity: cart[index].quantity + 1},
            ...cart.slice(index + 1)    
        ]
    
    // if it's not, just add it at quantity: 1
    } else {
        console.log('new')
        const item = products.find(product => product.id === id)    
        const newItem = {...item, quantity: 1}
        newCart.push(newItem)
    }
    return newCart
}    

const calculateSubtotal = (cart) =>         
    cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)


const updateQuantity = (id, name, cart) => {
        let newCart = [...cart]
        const index = cart.findIndex(item => item.id === id)
        
        if (name === 'increment'){
            console.log('increment')
            if (cart[index].quantity === cart[index].stock) {
                console.log('cant add, max reached')
            } else {
                newCart = [
                    ...cart.slice(0, index),
                    {...cart[index], quantity: cart[index].quantity + 1},
                    ...cart.slice(index + 1)    
                ]
            }
        } else if (name === 'decrement'){
            console.log('decrement')
            if (cart[index].quantity === 1){
                console.log('click "remove item" to remove from cart')
            } else {
                newCart = [
                    ...cart.slice(0, index),
                    {...cart[index], quantity: cart[index].quantity - 1},
                    ...cart.slice(index + 1)    
                ]
            }   
        }

        return newCart
}

const removeItem = (id, cart) => [...cart].filter(item => item.id !== id)  


const App = () => {
    const [[cart, subtotal], dispatch] = useReducer(reducer, [[],0])
    const [selectedProduct, setSelectedProduct] = useState()
    const [selectedCategory, setSelectedCategory] = useState('All Models')

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    const handleProdSelect = (id) => {
        const selected = products.find(product => product.id === id)
        setSelectedProduct(selected)
    }

    const closeProduct = () => {
        setSelectedProduct({})
    }
    
    const handleAddItem = (id) => {
        dispatch({ type: ACTIONS.ADD_ITEM, payload: { id: id } })
    }
    
    const handleUpdateQuantity = (id, name) => {
        dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id: id, name: name } })
    }

    const handleRemoveItem = (id) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id: id } })
    }
    
    return (
        <div>
            <BrowserRouter>
                <Header cart={cart}/>
                <Routes>
                    <Route path='/' element={
                        <Home />
                    }>   
                    </Route>
                    <Route path='/catalog' element={
                        <Catalog 
                            products={products}
                            selectedCategory={selectedCategory}
                            handleAddItem={handleAddItem}
                            handleCategoryChange={handleCategoryChange}
                            handleProdSelect={handleProdSelect}
                        />
                    }>
                    </Route>
                    <Route path='/cart' element={ 
                        <Cart 
                            cart={cart}
                            subtotal={subtotal}
                            handleUpdateQuantity={handleUpdateQuantity}
                            handleRemoveItem={handleRemoveItem}
                        />
                    }>
                    </Route> 
                    <Route path='/product' element={
                        <Product 
                            product={selectedProduct}
                            handleAddItem={handleAddItem}
                            closeProduct={closeProduct}
                        />
                    }>    
                    </Route> 
                </Routes>
            </BrowserRouter>
        </div> 
    )
}

export default App
