import React from 'react'
import Container from '../Assets/css/Container.css'

const ItemListContainer = ({greeting, color}) => {
    return (

        <h1 className='h1Container' style={{color:'white'}}>
            {greeting}
        </h1>
    )
}

export default ItemListContainer;