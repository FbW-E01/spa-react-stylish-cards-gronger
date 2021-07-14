import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardOne() {
  const divStyle = {
    border: 1px solid red;
  }

  return <div>
    Card number one :D :D: D:D :D: :D :D :D :D :D :D :D: D: :D :D: D: :D :D :D
  </div>
}


ReactDOM.render(
  <div>
    <CardOne />
  </div>

  document.getElementById('root')
);


