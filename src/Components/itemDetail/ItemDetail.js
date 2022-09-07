import React, {useState, useEffect} from "react";
import ItemDetailCss from "../../Assets/css/ItemDetail.css"

const ItemDetail = () => {

    const [detalleProductos, setDetalleProducto] = useState([])
    
    const buscarDetalleProductos = async() => {

        try{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Notebook Lenovo Ideapad 14iil05  Platinum Gray 14 , Intel Core I5 1035g1  8gb De Ram 512gb Ssd, Intel Uhd Graphics G1 1920x1080px Windows 10 Home', {setTimeout: 2000})
            const data = await response.json()
            setDetalleProducto(data.results)
            console.log(data.results)
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