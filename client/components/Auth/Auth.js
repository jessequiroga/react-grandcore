// TODO: Перенести обработчики в обёрточную компоненту, сделать запросы на сервер, получить ответ, записать jwt в редакс(мб в локалсторейдж), по желанию сделать атрибут value в инпуты
// TODO: так же нужно разбить эту компоненту на инпуты и другой jsx :D
// TODO: GL работяге, взявшемуся за это :D

import React, { useState } from 'react'
// import { useRouteMatch } from 'react-router-dom'

import Swipe from './Swipe'

const Auth = ({ uri }) => {
  // const math = useRouteMatch()
  const [text, setText] = useState()
  const changeHandler = (e) => {
    // !рассписал для ясности
    const newObj = {
      [e.currentTarget.name]: e.currentTarget.value
    }
    console.log({ ...text, ...newObj })

    setText({ ...text, ...newObj })
  }
  const clickHandler = () => {
    // какие-то запросы на сервер
  }
  // useEffect(() => {
  //   // console.log(uri)
  // })
  return (
    <div className={`page-auth page-${uri}`}>
      <div className="page-auth__content">
        <Swipe />

        <form method="POST" className="page-auth__auth-form">
          <div className="input-field">
            <input
              className="input input--height"
              type="text"
              name="email"
              required
              onChange={changeHandler}
            />
            <label className="input__label" htmlFor="email">
              Email
            </label>
            <span className="input__error" />
          </div>

          <div className="input-field">
            <input
              className="input input--height"
              type="password"
              name="password"
              required
              onChange={changeHandler}
            />
            <label className="input__label" htmlFor="password">
              Пароль
            </label>
            <span className="input__error" />
          </div>

          {uri !== 'reg' ? (
            <a href={`/auth-${uri}-passreset`} className="input__sub">
              Забыли пароль?
            </a>
          ) : (
            <>
              <div className="input-field">
                <input
                  className="input"
                  id="reg-psw2"
                  type="password"
                  name="password2"
                  required
                  onChange={changeHandler}
                />
                <label className="page-reg__input-title" htmlFor="password2">
                  Повторите пароль
                </label>
                <span className="input__error" />
              </div>

              <div className="input-field">
                <label className="page-reg__input-title" htmlFor="name">
                  Имя на сайте
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  required
                  onChange={changeHandler}
                />
                <span className="input__error" />
              </div>

              <div className="input-field">
                <label className="page-reg__input-title" htmlFor="invite">
                  Инвайт
                </label>
                <input
                  className="input"
                  type="text"
                  name="invite"
                  required
                  onChange={changeHandler}
                />
                <span className="input__error" />
                <a href="auth-get-invite.html" className="input__sub">
                  Получить инвайт
                </a>
              </div>
            </>
          )}

          <button
            type="button"
            className="btn btn--green btn--big btn--width"
            onClick={clickHandler}
          >
            Войти
          </button>

          <div className="page-auth__error" />
        </form>
      </div>
    </div>
  )
}

export default Auth
