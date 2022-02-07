
export default function Card(props) {
    return (
        <div>
            <img src={props.img} alt='' id={props.id}></img>
            <h2>{props.brand} {props.model} {props.size}</h2>
            <h3>{props.price}</h3>
        </div>
    )
}