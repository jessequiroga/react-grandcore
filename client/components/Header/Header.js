import React from 'react'

import M from 'materialize-css'

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
          <a className="header-mobile-nav__nav-item item" href="list.html">
            <b>Софт</b>
          </a>
          <a className="header-mobile-nav__nav-item item" href="list.html">
            <b>Игры</b>
          </a>
          <a className="header-mobile-nav__nav-item item" href="list.html">
            <b>Сервисы</b>
          </a>
          <a className="header-mobile-nav__nav-item item" href="list.html">
            <b>Изделия</b>
          </a>
          <a className="header-mobile-nav__nav-item item" href="list.html">
            <b>Тексты</b>
          </a>
        </nav>
        <nav className="header-mobile-nav__nav">
          <a className="header-mobile-nav__nav-item item" href="about.html">
            О фонде
          </a>
          <a className="header-mobile-nav__nav-item item" href="donat.html">
            Спонсоры
          </a>
          <a className="header-mobile-nav__nav-item item" href="users.html">
            Участники
          </a>
        </nav>
        <nav className="header-mobile-nav__nav">
          <a href="auth-login.html" className="header-mobile-nav__signup-btn btn btn--green">
            Войти
          </a>
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
              <svg>{/* <use xlink:href="#path"> */}</svg>
              <svg>{/* <use xlink:href="#path"> */}</svg>
            </div>
          </label>

          {/* <svg xmlns="http://www.w3.org/2000/svg" style={{  }}>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="path">
              <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22" />
            </symbol>
          </svg> */}
        </div>
        <div className="header-left">
          <a className="header-left__logo" href="index.html">
            {/* я задоблабался исправлять эту проблему, решил её так */} 
          </a>
          <nav className="header-left__nav nav">
            <a className="header-left__nav-item item" href="list.html">
              Софт
            </a>
            <a className="header-left__nav-item item" href="list.html">
              Игры
            </a>
            <a className="header-left__nav-item item" href="list.html">
              Сервисы
            </a>
            <a className="header-left__nav-item item" href="list.html">
              Изделия
            </a>
            <a className="header-left__nav-item item" href="list.html">
              Тексты
            </a>
          </nav>
        </div>
        <div className="header-right">
          <nav className="header-right__nav">
            <a className="header-right__nav-item item" href="about.html">
              О фонде
            </a>
            <a className="header-right__nav-item item" href="donat.html">
              Спонсоры
            </a>
            <a className="header-right__nav-item item" href="users.html">
              Участники
            </a>
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
            <a href="auth-login.html" className="header-right-btns__signup-btn btn btn--green">
              Войти
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
