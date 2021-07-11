import React from 'react'
import { FeaturesImg, FeaturesSVG } from './Utils'

const Features = () => {
    return (
      <section className="features">
          <div className="features-wrapper">
                <FeaturesSVG/>

            <div className="features-text">
    <p className="features-medium">We Provide Many Features You Can Use</p>
    <p className="features-regular">You can explore the features that we provide with fun and have their own functions each feature.</p>
    <div className="features-box">
        <div className="features-group">
            <FeaturesImg/>
            <p className="features-medium-sm">Powerfull online protection.</p>
        </div>
        <div className="features-group">
            <FeaturesImg/>
            <p className="features-medium-sm">Internet without borders.</p>
        </div>
        <div className="features-group">
            <FeaturesImg/>
            <p className="features-medium-sm">Supercharged VPN</p>
        </div>
        <div className="features-group">
            <FeaturesImg/>
            <p className="features-medium-sm">No specific time limits.</p>
        </div>
    </div>
</div>
          </div>
      </section>
    )
}

export default Features
