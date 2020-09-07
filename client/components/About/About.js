/* eslint-disable */
import React, {  } from 'react'
import text from './aboutTexs'
// import Links from './auxiliaryСomponents/links'
// let arr = []
const About = () => {
  return (
    <div>
      <div className="page-about page-container" >
        <div class="page-about-content" id="aboutTocSrc">
          {text.map(t=>{
            return (
              <div key={t.nID} className="page-about-content-block" id={t.id}>
                <h2 class="page-about-content-block__title">
                      {t.title}
                </h2>

                <div class="page-about-content-block__content">
                  {t.text.map(text=>{
                    return <p>{text.text}</p>
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
