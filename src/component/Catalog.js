import Categories from "./Catalog/Categories";
import Card from "./catalog/Card";

export default function Catalog (props) {
    return (
        <div>
            <Categories />
            {props.products.map(product => {
                return (
                    <Card 
                        key={product.id}
                        id={product.id}
                        img={product.imgSmall}
                        brand={product.brand}
                        model={product.model}
                        size={product.size}
                        price={product.price}
                    />    
                )
            })}
        </div>
    )
}