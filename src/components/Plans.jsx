import React from "react";
import  image from "../images/Premium.svg"
import { FeaturesImg2 } from "./Utils";

const Plans = () => {
  return <section className="plans">
    <div className="plans-wrapper">
      <div className="plans-header">
        <p className="features-medium">Choose Your Plan</p>
    <p className="features-regular">Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
      </div>
<div className="plans-group-lists">
   <div className="plans-group">
        <div className="plans-box">
          <div className="plans-img-lists">
            <div className="plans-img">
            <img src={image} alt="free plan" />
          </div>
          <p className="plans-user-bold ">Free Plan</p>
          </div>
          <div className="features-box">
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Unlimited Bandwitch</p>
        </div>
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Encrypted Connection</p>
        </div>
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">No Traffic Logs</p>
        </div>
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Works on All Devices</p>
        </div>
    </div>
   <div className="plans-links">
      <p className="user-bold">Free</p>
    <a href="#" className="plans-btn">select</a>
   </div>
        </div>
        
      </div>
       <div className="plans-group">
        <div className="plans-box">
         <div className="plans-img-lists">
            <div className="plans-img">
            <img src={image} alt="free plan" />
          </div>
          <p className="plans-user-bold ">Standard Plan</p>
         </div>
          <div className="features-box">
        <div className="features-group">
              <FeaturesImg2/>
            <p className="features-medium-sm">Unlimited Bandwitch</p>
        </div>
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Encrypted Connection</p>
        </div>
        <div className="features-group">
              <FeaturesImg2/>
            <p className="features-medium-sm">No Traffic Logs</p>
        </div>
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Works on All Devices</p>
        </div>
       
    </div>
   <div className="plans-links">
      <p className="user-bold">$9<span className="light"> / mo</span></p>
    <a href="#" className="plans-btn">select</a>
   </div>
        </div>
        
      </div>
       <div className="plans-group">
        <div className="plans-box">
          <div className="plans-img-lists">
            <div className="plans-img">
            <img src={image} alt="free plan" />
          </div>
          <p className="plans-user-bold ">Premium Plan</p>
          </div>
          <div className="features-box">      
        <div className="features-group">
              <FeaturesImg2/>
            <p className="features-medium-sm">No Traffic Logs</p>
        </div>
        <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Works on All Devices</p>
        </div>
          <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Connect Anyware</p>
        </div>
              <div className="features-group">
            <FeaturesImg2/>
            <p className="features-medium-sm">Get New Features</p>
        </div>

    </div>
   <div className="plans-links">
      <p className="user-bold">$12<span className="light"> / mo</span></p>
    <a href="#" className="plans-btn">select</a>
   </div>
        </div>
        
      </div>
</div>
    </div>
  </section>
  ;
};

export default Plans;
