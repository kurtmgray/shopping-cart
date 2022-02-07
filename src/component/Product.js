export default function Product (props) {
    return (
        <div>
            <img src={props.product.img} alt='' id={props.product.id}></img>
            <h2>{props.product.brand} {props.product.model} {props.product.size}</h2>
            <h3>{props.product.price}</h3>
            <a href="/catalog"><button onClick={props.closeProduct}>Close</button></a>
        </div>
    )
}