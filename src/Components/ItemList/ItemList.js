import React, {useState, useEffect} from "react";
import ItemListCss from "../../Assets/css/ItemList.css"
import ItemCountContainer from "../Count/ItemCountContainer";

const ItemList = () => {

   const onAdd = (cantidad) => {
      console.log(`Compraste ${cantidad} unidades`)
  }
    const [productos, setProductos] = useState([])
    
    const buscarProductos = async() => {

        try{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=notebook', {setTimeout: 2000})
            const data = await response.json()
            setProductos(data.results)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        buscarProductos()
    }, [])

    return(
        <div>
        {productos.map((product) => {

        return(
            <div>

              <div className="cardSection">
                <div className="cardImg">
                  <img src={product.thumbnail} height={200} width={250}/>
                  <p className="cardPrice">$ {product.price}</p>
                </div>
                <div className="cardTitle">
                  <h4>{product.title}</h4>
                </div>
                <ItemCountContainer initial={1} stock={10} onAdd={onAdd}/>
              </div>
              </div>
        )

        })}
            
        </div>
    )
}

export default ItemList
