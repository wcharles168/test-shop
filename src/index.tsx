import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Store} from './components/store'
import {CartProvider} from './components/context'

ReactDOM.render(
  <CartProvider>
    <Store/>
  </CartProvider>,
  document.getElementById('root') as HTMLElement
);
 