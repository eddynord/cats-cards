import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';


import './index.css';




function Container() {
  return (
    <div className='cards'>
      <div className='card_one'>
        <Contact
          img = "./img/cat1.jpg"
          name = "Mr. Whiskerson"
          phone = "(212) 555-1234"
          email = "mr.whiskaz@catnap.meow"
        />
      </div>

      <div className='card_two'>
        <Contact
          img = "./img/cat2.jpg"
          name = "Fluffykins"
          phone = "(212) 555-2345"
          email = "fluff@me.com"
        />
      </div>

      <div className='card_three'>
        <Contact
          img = "./img/cat3.jpg"
          name = "Felix"
          phone = "(212) 555-4567"
          email = "thecat@hotmail.com"
        />
      </div>

      <div className='card_four'>
        <Contact
          img = "./img/cat4.jpg"
          name = "Pumpkin"
          phone = "(0800) CAT KING"
          email = "pumpkin@scrimba.com"
        />
      </div>

    </div>
  )
} 





ReactDOM.createRoot(document.getElementById('root')).render(<Container/>)
  
