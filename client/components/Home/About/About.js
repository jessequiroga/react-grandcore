/* eslint-disable */
import React, {  } from 'react'
import text from './aboutTexs'
// import Links from './auxiliaryСomponents/links'
// let arr = []
const About = () => {
  let i = 0
  return (
    <div>
      <div className="page-about page-container" >
        <div className="page-about-content" id="aboutTocSrc">
          {text.map(t=>{
            {/* debugger */}
            return (
              <div key={t.nID} className="page-about-content-block" id={t.id}>
                <h2 className="page-about-content-block__title">
                      {t.title}
                </h2>

                <div className="page-about-content-block__content">
                  {t.text.map(text=>{
                    i++
                    return <p key={i}>{text.text}</p>
                  })}
                </div>
                
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
  
}

export default About
