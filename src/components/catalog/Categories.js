export default function Categories(props) {
    // need to change this to state-level
    // useEffect case?

    const onClick = (e) => {
        const name = e.target.innerText
        console.log(name)
        props.handleCategoryChange(name)
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