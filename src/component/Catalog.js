import Categories from "./catalog/Categories";
import Card from "./catalog/Card";

export default function Catalog (props) {
    const sortedCards = props.products.map(product => {
        if (product.category === props.selectedCategory) {
            return (
                <Card 
                    key={product.id}
                    id={product.id}
                    img={product.imgSmall}
                    brand={product.brand}
                    model={product.model}
                    size={product.size}
                    price={product.price}
                    handleCartChange={props.handleCartChange}
                    handleProdSelect={props.handleProdSelect}
                />    
            )
        } else if (props.selectedCategory === 'All Models') {
            return (
                <Card 
                    key={product.id}
                    id={product.id}
                    img={product.imgSmall}
                    brand={product.brand}
                    model={product.model}
                    size={product.size}
                    price={product.price}
                    handleCartChange={props.handleCartChange}
                    handleProdSelect={props.handleProdSelect}
                />    
            )
        } else return null    
    })

    return (
        <div className="catalog">
            <Categories 
                selectedCategory={props.selectedCategory}
                handleCategoryChange={props.handleCategoryChange}
            />
            {sortedCards}
        </div>
    )
}