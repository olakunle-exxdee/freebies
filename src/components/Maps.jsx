import React from 'react'
import {Map} from "./utils"
import image from "../images/Sponsored.svg"


const Maps = () => {
    return (
        <section className="maps">
            <div className="maps-wrapper">
                <div className="plans-header">
                <p className="features-medium">Huge Global Network <br /> of Fast VPN</p>
                <p className="features-regular">See LaslesVPN everywhere to make it easier for you when you move <br /> locations.</p>
                 <Map/>
                <div className="companies">
                    <img src={image} alt="companies" />
                </div>
                </div>


            </div>
        </section>
    )
}

export default Maps
