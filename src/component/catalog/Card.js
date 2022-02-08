import { Link } from "react-router-dom";


export default function Card (props) {
    const handleClick = (e) => {
        const id = e.target.id
        props.handleCartChange(id)
    }

    const selectProduct = (e) => {
        const id = e.target.id
        props.handleProdSelect(id)
    }
        
    return (
        <div className="card">
            <Link to='/product' onClick={selectProduct}><img src={props.img} alt='' id={props.id}></img></Link>
            <h2>{props.brand} {props.model} {props.size}</h2>
            <h3>{props.price} USD</h3>
            <button onClick={handleClick} id={props.id}>Add to Cart</button>
        </div>
    )
}