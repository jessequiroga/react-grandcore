import React from 'react'
import {  NavLink } from 'react-router-dom'

const Swipe = () => {
  return (
    <div className="page-auth-selector">
      <NavLink to="/login-auth" className="page-auth-selector__item " activeClassName="active">
        Вход
      </NavLink>

      <NavLink to="/reg-auth" className="page-auth-selector__item" activeClassName="active">
        Регистрация
      </NavLink>
    </div>
  )
}

export default Swipe
