import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Container from '../Assets/css/Container.css'
import ItemDetail from './itemDetail/ItemDetail'



const ItemDetailContainer = ({greeting, color}) => {
    
    // const onAdd = (cantidad) => {
    //     console.log(`Compraste ${cantidad} unidades`)
    // }
    return (
        <div>
        <h1 className='h1Container' style={{color:'white'}}>
            {greeting}
        </h1>

            <div className='divContenedorCards'>
               {/* <ItemCountContainer initial={1} stock={10} onAdd={onAdd}/> */}
                <ItemDetail />
            </div>
        
        </div>

        
    )
}

export default ItemDetailContainer;