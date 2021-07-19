import React, { useState } from 'react'
import person from "../components/dataSlider"
import {BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs"


const Testimonies = () => {
    const [index, setIndex]= useState(0)
    
    const {image,name,location,text}= person[index]
   
    const checkNumber = (number) => {
    if (number > person.length - 1) {
      return 0;
    }
    if (number < 0) {
      return person.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
   
    return (
        <>
        <section id="testimonies" className="testimonies">
            <div className="testimonies-wrapper">
    <p className="features-medium">Trusted by Thousands of <br /> Happy Customer</p>
    <p className="features-regular">These are the stories of our customers who have joined us with great 
    <br/> pleasure when using this crazy feature.
    </p>
    <div className="testimonies-reviews">
       
       <div className="person">
        <div className="profile">
            <div className="profile-box">
               <div className="profile-group"> 
               <div className="profile-img">
                    <img src={image} alt={name} />
                </div>
                <div className="profile-name">
                    <p className="name">{name}</p>
                    <p className="location">{location}</p>
                </div>
                </div>
                <div className="profile-star">
                    <p className="profile-rating">4.5</p>
                    <div className="profile-svg">
                   <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250"/>
                </svg>

                    </div>
                </div>
            </div>
            <p className="profile-text">{text}</p>
        </div>

    </div> 
        
    <div className="testimonies-group">
        <div className="buttons">
            <div  onClick={()=>setIndex(0)} className={index ===0?"rounded-btn activer-btn":"rounded-btn"}></div>
            <div   onClick={()=>setIndex(1)}  className={index ===1?"rounded-btn activer-btn":"rounded-btn"}></div>
            <div   onClick={()=>setIndex(2)}  className={index ===2?"rounded-btn activer-btn":"rounded-btn"}></div>
            <div   onClick={()=>setIndex(3)}  className={index ===3?"rounded-btn activer-btn":"rounded-btn"}></div>
        </div>       
        <div className="testimonies-btn-group">
             <div className="left">
            <BsArrowLeftShort onClick={prevPerson} id="left"/>
        </div>
        <div className="right">
            <BsArrowRightShort onClick={nextPerson} id="right"/>
        </div>
        </div>  
    </div>

    </div>
            </div>
        </section>

        <section className="subscribe">
            <div className="subscribe-wrapper">
               <div className="subscribe-text">
                    <p className="features-medium">Subscribe Now for <br /> Get Special Features!</p>
                    <p className="features-regular">Let's subscribe with us and find the fun.</p>
               </div>
     <div className="hero-btn-wrapper">
                <a href="#" className="hero-btn">Subscribe Now</a>
            </div>
            </div>
            </section>
        </>
    )
}

export default Testimonies

// {person.map(person=>{
//     return <div key={person.id} className="person">
//         <div className="profile">
//             <div className="profile-box">
//                <div className="profile-group"> 
//                <div className="profile-img">
//                     <img src={person.image} alt={person.name} />
//                 </div>
//                 <div className="profile-name">
//                     <p className="name">{person.name}</p>
//                     <p className="location">{person.location}</p>
//                 </div>
//                 </div>
//                 <div className="profile-star">
//                     <p className="profile-rating">4.5</p>
//                     <div className="profile-svg">
//                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250"/>
//                 </svg>

//                     </div>
//                 </div>
//             </div>
//             <p className="profile-text">{person.text}</p>
//         </div>

//     </div>
// })}

