import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import example from './images/example.jpg';
import './HomePage.css';
import YoutubeEmbed from "./YoutubeEmbed";

export default function HomePage() {
  return (
    <div className="card text-center">
        <img src={example} className="card-img-top" alt="backGroundImage"/>
        <div className="card-body mx-auto">
            <div>
                <h3 id="covid-title"><strong>Please Note: Update in response to current COVID-19 situation</strong></h3>
                <p className="text-muted">COVID-19 PROTOCOL: <br/>The safety and health of our guests is our main priority. In accordance to Tourism South Africa’s Covid-19 Safety Guidelines/Protocols, we have implemented several practices to mitigate the risk to our guests and hosts. All staff and guests’ temperatures will be checked upon arrival. We ask all guests to wear a mask whilst inside the vehicle. All vehicles and equipment are sanitized before & after each group. Hand sanitizer is available in all vehicles. Most importantly: If guests feel any symptoms prior this experience, we ask that you contact us immediately. If this results in a cancellation, we will provide a FULL REFUND.</p>
            </div>
            <div className="my-5">
                <h2 id="experience-title"><strong>Experience Cape Town Like A Local</strong></h2>
                <YoutubeEmbed embedId="lAKVVi2WC6I" />
            </div>
            <div>
                <h2 id="experiences-title"><strong>Join Our Experiences</strong></h2>
            </div>
        </div>
    </div>
  )
}
