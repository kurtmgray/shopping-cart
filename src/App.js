import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Catalog from './component/Catalog'
import Product from './component/Product'
import Cart from './component/Cart'
import Header from './component/Header'
import products from './assets/products'

const App = () => {
    const [[cart, subtotal], setCartItems] = useState([[],0])
    const [selectedProduct, setSelectedProduct] = useState()
    const [selectedCategory, setSelectedCategory] = useState('All Models')

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
        setCartItems(([prevCart, prevSub]) => {
            let newCart = [...prevCart]
        
            // check to see if the wanted item is already in the array, and if the quantity is at max stock
            const want = (prevCart.find(item => item.id === id))
            console.log(want)
            // return prevCart if so
            if (want && want.quantity === want.stock){
                console.log('max stock')
            // if it's in the cart, but doesnt meet the above condition, increment the quantity by 1
            } else if (prevCart.find(item => item.id === id)) {
                console.log('add 1')
                const index = prevCart.findIndex(item => item.id === id)
                newCart = [
                    ...prevCart.splice(
                        index, 
                        1, 
                        {...prevCart[index], quantity: prevCart[index].quantity + 1})
                ]
                console.log(newCart[index].quantity)
            
                // if it's not, just add it at quantity: 1
            } else {
                console.log('new')
                const item = products.find(product => product.id === id)    
                const newItem = {...item, quantity: 1}
                newCart.push(newItem)
            }

            const newSub = newCart.reduce((acc, curr) => 
                acc + curr.quantity * curr.price, 0
            ) 

            console.log(newCart, newSub)
            return [newCart, newSub]


        })

        
        

       
    }    
    return (
        <div>
            {JSON.stringify(cart)}
            <p>Subtotal:{JSON.stringify(subtotal)}</p>
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
                            handleCartChange={handleCartChange}
                            handleCategoryChange={handleCategoryChange}
                            handleProdSelect={handleProdSelect}
                        />
                    }>
                    </Route>
                    <Route path='/cart' element={ 
                        <Cart 
                            cart={cart}
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