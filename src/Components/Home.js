import React from 'react';
import "./Home.css"

function Home(props) {
  return (
    <div className="container">
    <div className="l-heading">
    <h1 class="ui huge header">Miami Places<div class="sub header">Get to know the best areas in the Sunshine State</div></h1>
    </div>
      <img class="ui fluid image" src="../home-background.jpg" alt="miamicity"/>
    </div>
  );
}

export default Home;