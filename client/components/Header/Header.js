import React from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

const Header = () => {
  console.log(M)
  return (
    <>
      <div className="header-mobile-nav header-mobile-nav--hidden">
        <div className="header-mobile-nav__close">
          <button
            className="header-mobile-nav__close-btn btn btn-small"
            id="close-mobile-nav"
            type="button"
          />
        </div>
        <nav className="header-mobile-nav__nav">
          <Link className="header-mobile-nav__nav-item item" to="/soft">
            <b>Софт</b>
          </Link>
          <Link className="header-mobile-nav__nav-item item" to="list.html">
            <b>Игры</b>
          </Link>
          <Link className="header-mobile-nav__nav-item item" to="list.html">
            <b>Сервисы</b>
          </Link>
          <Link className="header-mobile-nav__nav-item item" to="list.html">
            <b>Изделия</b>
          </Link>
          <Link className="header-mobile-nav__nav-item item" to="list.html">
            <b>Тексты</b>
          </Link>
        </nav>
        <nav className="header-mobile-nav__nav">
          <Link className="header-mobile-nav__nav-item item" to="about.html">
            О фонде
          </Link>
          <Link className="header-mobile-nav__nav-item item" to="donat.html">
            Спонсоры
          </Link>
          <Link className="header-mobile-nav__nav-item item" to="users.html">
            Участники
          </Link>
        </nav>
        <nav className="header-mobile-nav__nav">
          <Link to="auth-login.html" className="header-mobile-nav__signup-btn btn btn--green">
            Войти
          </Link>
        </nav>
      </div>

      <header className="header">
        <div className="header-left-burger" id="burger-btn">
          <label className="burger-toggle" id="1">
            <input type="checkbox" id="1" />
            <div>
              <div>
                <span />
                <span />
              </div>
              <svg>{/* <use xlink:to="#path"> */}</svg>
              <svg>{/* <use xlink:to="#path"> */}</svg>
            </div>
          </label>

          {/* <svg xmlns="http://www.w3.org/2000/svg" style={{  }}>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="path">
              <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22" />
            </symbol>
          </svg> */}
        </div>
        <div className="header-left">
          <Link className="header-left__logo" to="/">
            {/* я задоблабался исправлять эту проблему, решил её так */}
          </Link>
          <nav className="header-left__nav nav">
            <Link className="header-left__nav-item item" to="/soft">
              Софт
            </Link>
            <Link className="header-left__nav-item item" to="/game">
              Игры
            </Link>
            <Link className="header-left__nav-item item" to="/service">
              Сервисы
            </Link>
            <Link className="header-left__nav-item item" to="/product">
              Изделия
            </Link>
            <Link className="header-left__nav-item item" to="/text">
              Тексты
            </Link>
          </nav>
        </div>
        <div className="header-right">
          <nav className="header-right__nav">
            <Link className="header-right__nav-item item" to="/">
              О фонде
            </Link>
            <Link className="header-right__nav-item item" to="/donat">
              Спонсоры
            </Link>
            <Link className="header-right__nav-item item" to="/users">
              Участники
            </Link>
          </nav>
          <div className="header-right-btns">
            <div className="header-right-btns__search">
              <button
                className="header-right-btns__search-btn header-right-btns__search-btn--action btn btn-small"
                id="search-btn-action"
                type="button"
              />
              <input
                type="search"
                className="header-right-btns__search-field search-field"
                id="search-field"
                placeholder="Поиск"
              />
              <button
                className="header-right-btns__close-btn btn btn-small"
                id="close-search-field"
                type="button"
              />
            </div>
            <button
              className="header-right-btns__more-btn btn btn--small"
              id="show-more"
              type="button"
            />
            <button
              className="header-right-btns__search-btn btn btn-small"
              id="search-btn"
              type="button"
            />
            <Link to="/login-auth" className="header-right-btns__signup-btn btn btn--green">
              Войти
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
