import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Catalog from './component/Catalog'
import Product from './component/Product'
import Cart from './component/Cart'
import Header from './component/Header'
import products from './assets/products'

const App = () => {
    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubtotal] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All Models')

    //when a category is clicked on
        //do i need state for selectedCategory? maybe for when I return to the catalog?
        //bike cards of that category are displayed
    //when a bike image(for now) is clicked on
        //setSelectedProduct to the product that matches the ID of the event
        //rout to /product
    //when a product page is closed
        //setSelectedProduct([])
        //rout to /catalog
    //when a product is added to cart
        //add product ID and quantity to cartItems
        //setSubtotal according to items in cart
    //when cart button is clicked on
        //rout to cart
    
    // useEffect(() => {
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems))
    // }, [cartItems])

    // useEffect(() => {
    //     setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    // },[])

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat)
        console.log('handleCat')
        console.log(cat)
    }

    const handleProdSelect = (id) => {
        const selected = products.find(product => product.id === id)
        setSelectedProduct(selected)
        console.log('handleProd')
        console.log(selected)
    }

    const closeProduct = () => {
        setSelectedProduct({})
    }
    
    const handleCartChange = (id) => {
        setCartItems(prevCart => {
            let newCart
            // check to see if the wanted item is already in the array, and if the quantity is at max stock
            // return prevCart if so
            const want = (prevCart.find(item => item.id === id))
            console.log(want)
            if (want && want.quantity === want.stock){
                console.log('max stock')
                return prevCart
            // if it's in the cart, but doesnt meet the above condition, increment the quantity by 1
            } else if (prevCart.find(item => item.id === id)) {
                const index = prevCart.findIndex(item => item.id === id)
                console.log(index)
                newCart = [
                    ...prevCart.slice(0, index),
                    {...prevCart[index], quantity: prevCart[index].quantity + 1},
                    ...prevCart.slice(index) 
                ]
                return newCart
            // if it's not, just add it at quantity: 1
            } else {
                newCart = [...prevCart]
                const item = products.find(product => product.id === id)    
                const newItem = {...item, quantity: 1}
                newCart.push(newItem)
                return newCart
            }
        })
        setSubtotal(() => {
            const newSub = cartItems.reduce((acc, curr) => {
                    return acc + parseInt(curr.price) * parseInt(curr.quantity)
                },0)
            console.log(newSub) 
            return parseInt(newSub)
        })
        console.log(cartItems, subtotal)
    }

    return (
        <div>
            
            <BrowserRouter>
                <Header cartItems={cartItems}/>
                <Routes>
                    <Route path='/' element={
                        <Home />
                    }>   
                    </Route>
                    <Route path='/catalog' element={
                        <Catalog 
                            products={products}
                            selectedCategory={selectedCategory}
                            handleCartChange={handleCartChange}
                            handleCategoryChange={handleCategoryChange}
                            handleProdSelect={handleProdSelect}
                        />
                    }>
                    </Route>
                    <Route path='/cart' element={ 
                        <Cart 
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            subtotal={subtotal}
                        />
                    }>
                    </Route> 
                    <Route path='/product' element={
                        <Product 
                            product={selectedProduct}
                            handleCartChange={handleCartChange}
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

/* 


*/