import React, {useState, useEffect} from "react";
// import ItemCount from "./ItemCount";
import 'remixicon/fonts/remixicon.css'

const ItemCountContainer = ({initial, stock, onAdd}) => {

    const [carrito, setCarrito] = useState(parseInt(initial))
    
    const decrementar = () => {
        setCarrito(carrito - 1)
    }
    const incrementar = () => {
        setCarrito(carrito + 1)
    }

    useEffect( () => {
        setCarrito(parseInt(initial))
    }, [initial])
    return(
        <div>
            <div className="contenedorContador">
            <h4 className="contadorCarrito">Cantidad: {carrito}</h4>
            <button disabled={carrito <= 1} className="btnCarrito" onClick={decrementar}>
                <i className="ri-subtract-line"></i>
            </button>
            <button disabled={carrito >= stock} className="btnCarrito" onClick={incrementar}>
                <i className="ri-add-line"></i>
            </button>

            </div>
            <div className="contenedorAddCarrito">
                <button className="btnAddCarrito" disabled={stock <= 0} onClick={ () => onAdd(carrito, alert(`AGREGASTE ${carrito} PRODUCTOS CORRECTAMENTE`))}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCountContainer