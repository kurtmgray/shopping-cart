export default function Card (props) {
    const addToCart = (e) => {
        const id = e.target.id
        props.addToCart(id)
    }

    const selectProduct = (e) => {
        const id = e.target.id
        props.handleProdSelect(id)
    }
        
    return (
        <div className="card">
            <a href='/product' onClick={selectProduct}><img src={props.img} alt='' id={props.id}></img></a>
            <h2>{props.brand} {props.model} {props.size}</h2>
            <h3>{props.price} USD</h3>
            <button onClick={addToCart} id={props.id}>Add to Cart</button>
        </div>
    )
}