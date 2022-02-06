import React from 'react'
import Header from '../src/Header'
import Hero from '../src/Hero'
import Reason from '../src/Reason'
import Roadmap from '../src/Roadmap'
import Overview from '../src/Overview'
import Team from '../src/Team'
import Faq from '../src/Faq'
import Footer from '../src/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => (
  <div>
    <Header />
    <Hero />
    <Reason />
    <Roadmap />
    <Overview />
    <Team />
    <Faq />
    <Footer />
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
    />
  </div>
)

export default Home
