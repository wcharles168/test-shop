import React, {useContext} from 'react'
import {CartContext} from '../components/context'
import {Product} from '../types'


export const Item: React.FC<{product: Product}> = ({product}) => {
    const cartCtx = useContext(CartContext)
    return (
        <div className="row">
            <div className="col">
                <img src={`/images/${product.img}.jpg`} alt={product.name}/>
            </div>
            <div className="col">
                <div className="row">
                    <div className="item-text"><b>{product.name}</b></div>
                </div>
                <div className="row">
                    <div className="item-text"><b>Quantity: {product.quantity}</b></div>
                </div>
                {/* TODO: ADD ACTUAL PRICE */}
                <div className="row">
                    <button className="btn btn-primary" onClick={() => cartCtx.addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}