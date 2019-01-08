import React from 'react'
import {Switch, Route} from 'react-router-dom'
import StoreFront from './StoreFront/StoreFront'
import ShoppingCart from './ShoppingCart/ShoppingCart'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/storefront' component={StoreFront}/>
        <Route  path='/shoppingcart' component={ShoppingCart}/>
    </Switch>
)