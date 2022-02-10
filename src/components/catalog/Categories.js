export default function Categories(props) {
    const onClick = (e) => {
        const category = e.target.innerText
        props.handleCategoryChange(category)
    }
    
    return (
        <div className="categories">
            <h1>Category / {props.selectedCategory}</h1>
            <h3 onClick={onClick}>Trail</h3>
            <h3 onClick={onClick}>All-Mountain</h3>
            <h3 onClick={onClick}>Enduro</h3>
            <h3 onClick={onClick}>All Models</h3>
        </div>
    )
}