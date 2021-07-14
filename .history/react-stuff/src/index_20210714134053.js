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

function CardTwo() {
  let className = 'purpleClass';

  return <div className={className}>
    CARDDDDD NUMBER 2 2 2 2 2222 222 22222222222222222 2 2 2 2 22 22 2 22 22  2
  </div>
}

ReactDOM.render(
  <div>
    <CardOne />
  </div>

  document.getElementById('root')
);


