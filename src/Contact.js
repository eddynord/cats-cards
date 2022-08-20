import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import phoneIcon from '../src/phone-icon.png'
import emailIcon from '../src/email-icon.png'






export default Contact 
function Contact(props) {
    return (
        <div className='card-container'>
            <div className="contact-card">
                <img className='cat-name' src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-phone">
                    <img src={phoneIcon}/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-email">
                    <img src={emailIcon} />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}








// ANOTHER WAY OF WRITING THE SAME THING //
// function Contact({img, name, phone, email}) {
//     return (
//         <div className='card-container'>
//             <div className="contact-card">
//                 <img className='cat-name' src={img}/>
//                 <h3>{name}</h3>
//                 <div className="info-phone">
//                     <img src={phoneIcon}/>
//                     <p>{phone}</p>
//                 </div>
//                 <div className="info-email">
//                     <img src={emailIcon} />
//                     <p>{email}</p>
//                 </div>
//             </div>

//             {/* <div className="contact-card">
//                     <img className='cat-name' src={fluffykins}/>
//                     <h3>Fluffykins</h3>
//                     <div className="info-group">
//                         <img src={phoneIcon} />
//                         <p>(212) 555-2345</p>
//                     </div>
//                     <div className="info-group">
//                         <img src={emailIcon} />
//                         <p>fluff@me.com</p>
//                     </div>
//             </div>
                
//                 <div className="contact-card">
//                     <img className='cat-name' src={felix}/>
//                     <h3>Felix</h3>
//                     <div className="info-group">
//                         <img src={phoneIcon} />
//                         <p>(212) 555-4567</p>
//                     </div>
//                     <div className="info-group">
//                         <img src={emailIcon} />
//                         <p>thecat@hotmail.com</p>
//                     </div>
//                 </div>
                
//                 <div className="contact-card">
//                     <img className='cat-name' src={pumpkin}/>
//                     <h3>Pumpkin</h3>
//                     <div className="info-group">
//                         <img src={phoneIcon} />
//                         <p>(0800) CAT KING</p>
//                     </div>
//                     <div className="info-group">
//                         <img src={emailIcon} />
//                         <p>pumpkin@scrimba.com</p>
//                     </div>
//                 </div> */}

//         </div>
        
//     )
// }