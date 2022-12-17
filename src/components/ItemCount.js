export const ItemCount = ({count, handleCount, handleAdd}) => {
    return (
        <div>
        <button onClick={() => handleCount("menos")}>
            -
        </button>
        <span>
            {count}
        </span>
        <button onClick={() => handleCount("mas")}>
            +
        </button>
        <button onClick={()=>handleAdd}>
            Agregar al carrito
        </button>
        </div>
    )
}