import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './component/Home'
import Catalog from './component/Catalog'
import Product from './component/Product'
import Cart from './component/Cart'
import Header from './component/Header'
import products from './assets/products'

const App = () => {
    const [cartItems, setCartItems] = useState([
        {
        product: '',
        quantity: 0
        }
    ])
    const [subtotal, setSubtotal] = useState('')
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedCategory, setSelectedCategory] = useState('')

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
        

    return (
        <div>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/catalog'>
                        <Catalog 
                            products={products}
                        />
                    </Route>
                    <Route path='/product'> 
                        <Product 
                            product={selectedProduct}
                        />
                    </Route>
                    <Route path='/cart'> 
                        <Cart 
                            cartItems={cartItems}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div> 
    )
}

export default App