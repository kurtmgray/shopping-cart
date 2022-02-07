export default function Categories() {
    // need to change this to state-level
    // useEffect case?
    let selected
    const select = (e) => {
        selected = e.target.value
    }
    
    return (
        <div>
            <h2>Category / </h2>
            <h2>{selected}</h2>
            <h3 onClick={select} value="Trail">Trail</h3>
            <h3 onClick={select} value="All-Mountain">All-Mountain</h3>
            <h3 onClick={select} value="Enduro">Enduro</h3>
        </div>
    )
}