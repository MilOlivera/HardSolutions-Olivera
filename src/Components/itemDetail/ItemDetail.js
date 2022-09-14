import React, {useState, useEffect} from "react";
import ItemDetailCss from "../../Assets/css/ItemDetail.css"
import ItemCountContainer from "../Count/ItemCountContainer";
import {Link, BrowserRouter, Route, Routes, useParams} from 'react-router-dom'

const ItemDetail = () => {

    const [detalleProductos, setDetalleProducto] = useState([])

    
    // const {detalleId} = useParams()
    // console.log(detalleId, 'detalle id')

    const buscarDetalleProductos = async() => {

        try{
            // const response = await fetch(`https://api.mercadolibre.com/items?ids=${detalleId}`, {setTimeout: 2000})
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Notebook Asus Vivobook E410ma Azul Eléctrico 14 , Intel Celeron N4020 4gb De Ram 128gb Ssd, Intel Uhd Graphics 600 60 Hz 1366x768px Windows 10 Home', {setTimeout: 2000})
            const data = await response.json()
            setDetalleProducto(data.results)
            console.log(data.results, 'detalle del producto')
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        buscarDetalleProductos()
    }, [])

    return(
        <div>
        {detalleProductos.slice(0,1).map((product) => {

        return(
            <div>

              <div className="contenedorDetail">
                
                <div className="imgDetail">

                  <img src={product.thumbnail} height={200} width={250}/>

                </div>
                
                <div className="contenedorDatos">
                    <div className="datosDetail">
                        <h4>{product.title}</h4>
                    </div>
                    <hr></hr>
                    <div className="datosDetail">
                        <p className="precioDetail">$ {product.price}</p>
                    </div>
                    <hr></hr>
                    <div className="datosDetail">
                        <h4 className="h4Detail"> Caracteristicas Importantes</h4>
                            <ul>
                                <li>{product.attributes[3].name} : {product.attributes[3].values[0].name}</li>
                                <li>Procesador: {product.attributes[6].value_name}{product.attributes[7].value_name}</li>
                                <li>{product.attributes[9].name} : {product.attributes[9].value_name}</li>

                            </ul>
                    </div>
                    <hr></hr>
                    <div className="datosDetail">
                        <h4 className="h4Detail"> Ubicación</h4>
                        <p>{product.seller_address.city.name}, {product.seller_address.state.name}, {product.seller_address.country.name}</p>
                    </div>
                   

                    <div className="datosDetail">
                        <button className="btnDetailComprar"><a href="#">COMPRAR</a></button>
                    </div>
                </div>
              </div>  

            </div>
        )

        })}
            
        </div>
    )
}

export default ItemDetail;