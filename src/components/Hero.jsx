import React from 'react'
import image from "../images/Illustration 1.png"
import user from "../images/user.svg"
import location from "../images/location.svg"
import server from "../images/Server.svg"

const Hero = () => {
    return (
        <>
        <section className="hero">
          <div className="hero-wrapper">
           <div className="text-wrapper">
            <p className="hero-heading">Want anything to be easy with <span className="bold">LaslesVPN.</span></p>
           <p className="hero-paragraph">
               Provide a network for all your needs with ease and fun using <span className="medium">LaslesVPN</span> discover interesting features from us.
           </p>
            <div className="hero-btn-wrapper">
                <a href="#" className="hero-btn">Get Started</a>
            </div>
           </div>
          
          </div>
          <div className="hero-img">
             <div className="hero-img-wrapper">
                  <img src={image} alt="LaslesVPN-img" />
             </div>
          </div>
            
        </section >
        <div className="users">
            <div className="users-wrapper">
                <div className="users-group">
                    <div className="users-box">
                        <div className="users-img">
                            <img src={user} alt="user" />
                        </div>
                        <div className="users-text">
                            <p className="user-bold">90+</p>
                            <p className="user-regular">users</p>
                        </div>
                    </div>
                </div>
                 <div className="users-group">
                    <div className="users-box">
                        <div className="users-img">
                             <img src={location} alt="location" />
                        </div>
                        <div className="users-text">
                             <p className="user-bold">30+</p>
                            <p className="user-regular">locations</p>
                        </div>
                    </div>
                </div>
                 <div className="users-group">
                    <div className="users-box">
                        <div className="users-img">
                             <img src={server} alt="server" />
                        </div>
                        <div className="users-text">
                             <p className="user-bold">50+</p>
                            <p className="user-regular">servers</p>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        </>
    )
}

export default Hero
