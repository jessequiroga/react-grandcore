import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = (props) => (
  <Helmet>
    <title>GrandCore- {props.title}</title>
  </Helmet>
)

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: 'GrandCore.org'
}

export default Head
