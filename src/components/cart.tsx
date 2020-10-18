import React, {useState, useEffect, useContext} from 'react'
import {CartContext} from '../components/context'
import {Product} from '../types'

// https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
declare global {
    interface Window {
        Stripe: any
    }
}


export const Cart: React.FC<{stripeToken: string}>= (props) => {
    const [stripe, setStripe] = useState<{ redirectToCheckout: Function} | null>(null);
    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe(props.stripeToken)) 
        }
    }, [props.stripeToken])

    const cartCtx = useContext(CartContext)
    function checkout() {
        if (stripe) {
            stripe.redirectToCheckout({
                lineItems: cartCtx.items.map((item: Product) => ({
                    price: item.priceKey,
                    quantity: item.quantity
                })),
               mode: 'payment',
               successUrl: 'https://your-website.com/success',
               cancelUrl: 'https://your-website.com/canceled',
            })
        }
   }

   return (
       <div>
           <button className="btn btn-success" onClick={checkout}>Checkout</button>
       </div>
   )

}