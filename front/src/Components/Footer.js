import React from 'react'

function Footer() {
  return (
   <div class="footer">
      <div class="section__container footer__container">
        <div class="footer__content">
          <h4>SUBSCRIBE TO GET THE LATEST NEWS ABOUT US</h4>
          <p>
            We recommend you to subscribe to our newspaper. Enter your email to
            get our daily updates about us
          </p>
        </div>
        <div class="footer__form">
          <form action="/">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div class="section__container footer__bar">
        <div class="footer__logo">
          <h4><a href="/">RXDform</a></h4>
          <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
        </div>
        <ul class="footer__nav">
          <li class="footer__link"><a href="/">Home</a></li>
          <li class="footer__link"><a href="/">À PROPOS</a></li>
          <li class="footer__link"><a href="/">Sondage</a></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Footer