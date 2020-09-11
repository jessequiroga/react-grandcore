/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Redirect, StaticRouter, BrowserRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Startup from './startup'
import Header from '../components/Header/Header'
import CustomRoute from '../components/Route/Route'

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  token: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  user: null,
  token: ''
}
// const a = CustomRoute
// console.log(a)
OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RouterSelector history={history} location={props.location} context={props.context}>
          <Startup>
            <Header />

            <CustomRoute />
          </Startup>
        </RouterSelector>
      </Provider>
    </BrowserRouter>
  )
}

export default RootComponent
