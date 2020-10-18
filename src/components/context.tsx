import React, {useState, createContext} from 'react'
import {Product} from '../types'

interface ContextProps {
    items: Product[] 
    addToCart: (item: Product) => void
}

export const CartContext = createContext<ContextProps>({
    items: [],
    addToCart: () => {}
})

export const CartProvider: React.FC = ({children}) => {
    const [items, setItems] = useState<Product[]>([])

    function addToItems(item: Product) {
        setItems(prevState => [...prevState, item])
    }

    function aggregateItems() {
        return items.reduce<Product[]>((acc: Product[], item: Product) => {
            const found = acc.find((_item: Product) => _item.priceKey === item.priceKey ) as Product
            if (found) {
                found.quantity = found.quantity + 1
            } else {
                acc.push(item)
            }
            return acc
        }, [])
    }
    return (
        <CartContext.Provider value={{
            items: aggregateItems(),
            addToCart: addToItems
        }}>
            {children}
        </CartContext.Provider>
    )
}