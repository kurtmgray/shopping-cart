import { Link } from "react-router-dom";

export default function Product (props) {
    const addToCart = (e) => {
        const id = e.target.id
        props.handleCartChange(id)
    }

    return (
        <div>
        {props.product ? 
            <div>
                <img src={props.product.img} alt='' id={props.product.id}></img>
                <h2>{props.product.brand} {props.product.model} {props.product.size}</h2>
                <h3>{props.product.price}</h3>
                <button onClick={addToCart} id={props.product.id}>Add to Cart</button>
                <Link to="/catalog"><button onClick={props.closeProduct}>Back to Catalog</button></Link>
            </div> :
            <div>No product selected.</div>
        }
        </div>
    )
}