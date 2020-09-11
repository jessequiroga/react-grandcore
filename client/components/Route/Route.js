import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/home'
import NotFound from '../404'
import Product from '../Product/Product'
import Game from '../Game/Game'
import Donate from '../Donate/Donate'
import Auth from '../Auth/Auth'
import Service from '../Service/Service'
import Text from '../Text/Text'
import Users from '../Users/Users'
import Soft from '../Soft/Soft'

const CustomRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/product" component={() => <Product />} />
        <Route exact path="/soft" component={() => <Soft />} />
        <Route exact path="/game" component={() => <Game />} />
        <Route exact path="/donat" component={() => <Donate />} />
        <Route path="/login-auth" component={() => <Auth uri="login" />} />
        <Route path="/reg-auth" component={() => <Auth uri="reg" />} />
        <Route exact path="/service" component={() => <Service />} />
        <Route exact path="/text" component={() => <Text />} />
        <Route exact path="/users" component={() => <Users />} />
        <Route exact path="/game" component={() => <Game />} />
        <Route component={() => <NotFound />} />
      </Switch>
    </>
  )
}

export default CustomRoute
