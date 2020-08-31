import React from 'react'
import Head from './head'
import About from './about'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <About/>
    </div>
  )
}

Home.propTypes = {}

export default Home
