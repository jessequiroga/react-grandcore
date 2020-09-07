import React from 'react'
import Head from './head'
// eslint-disable-next-line import/extensions
import About from './About/About'
import Header from './Header/Header'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header/>

      <About />
    </div>
  )
}

// Home.propTypes = {}

export default Home
