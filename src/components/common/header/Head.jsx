import React from "react"
import logo from '../../../images/logo.png'
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexHead'>
          <div className='logo'>
            <h1>GICS</h1>
            <span>EDUCATION CONSULTANCY & LEARNING</span>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
