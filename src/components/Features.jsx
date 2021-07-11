import React from 'react'
// import { FeaturesImg, FeaturesSVG } from './Utils.js'
export const FeaturesImg = () => {
  return (
    <div className="features-img">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73"/>
            </svg>
            </div>
  )
}
export const FeaturesImg2 = () => {
  return (
    <div className="features-img">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73"/>
                  </svg>
            </div>
  )
}


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
