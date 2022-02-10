import { Link } from "react-router-dom";


export default function Card (props) {
    const handleClick = (e) => {
        const id = e.target.id
        props.handleAddItem(id)
    }

    const handleClickProduct = (e) => {
        const id = e.target.id
        props.handleProdSelect(id)
    }
        
    return (
        <div className="card">
            <Link to='/product'><img src={props.img} alt='' onClick={handleClickProduct} id={props.id}></img></Link>
            <h2>{props.brand} {props.model} {props.size}</h2>
            <h3>{props.price} USD</h3>
            <button onClick={handleClick} id={props.id}>Add to Cart</button>
        </div>
    )
}