import React from 'react';
import "./Footer.css"

function Footer(props) {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>Copyright © by Fabian Pena <a href="https://github.com/fabianpena90"><i aria-hidden="true" class="github icon"></i></a> {date}</footer>
    </div>
  );
}

export default Footer;

