import React from 'react';
import {placesData} from '../placesData'
import './Tours.css'


function Tour(props) {
  
  
  return (
    <div>
    <h1 className="ui center aligned header">Places to Visit</h1>
    <div className="ui container">
      {placesData.map(place =>{
        return (
      <div class="ui card card-container">
      <div class="image">
      <img src={place.image} alt="miami beach"/>
      </div>
      <div class="content">
      <div class="header">{place.cityName}</div>
      <div class="description">{place.content}</div>
      </div>
      <div class="extra content">
      <a href={place.infoURL}>More info</a>
      </div>
      </div>
        )
      })}
    </div>
    </div>
  );
}

export default Tour;