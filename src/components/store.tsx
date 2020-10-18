import React from 'react'
import {Item} from '../components/item'
import {Cart} from '../components/cart'

const items = [
    { 
        priceKey: "price_1HDF5yBMnzGBC3fzw5GUmCeJ", 
        quantity: 1, 
        name: "Gildan Men's Fleece Crewneck Sweatshirt",
        img: "gildan sweatshirt"
    },
    { 
        priceKey: "price_1HDF4oBMnzGBC3fzkc8BCPmv", 
        quantity: 1, 
        name: "Hanes Men's Ecosmart Fleece Sweatshirt",
        img: "hanes sweatshirt"
    } 
]

export const Store: React.FC = () => {
    const itemComponents: object[] = []
    items.forEach(item => {
        itemComponents.push(<Item product={item}/>)
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {itemComponents}
                </div>
                <div className="col">
                    <Cart stripeToken="[token_here]"/>
                </div>
            </div>
        </div>
    )
}