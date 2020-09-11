import React from 'react'

const Links = ({ title, arrayLinks }) => {
  return (
    <div>
      <p className="page-about-content-block__title">{title}</p>
      <div className="page-about-content-block__content">
        {arrayLinks.map((link) => {
          return <a key={link} href="#">{link}</a>
        })}
      </div>
    </div>
  )
}

export default Links
