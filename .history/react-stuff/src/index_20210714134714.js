import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardOneInline() {
  const divStyle = {
    border: '1px solid red';
  }

  return <div>
    Card number one :D :D: D:D :D: :D :D :D :D :D :D :D: D: :D :D: D: :D :D :D
  </div>
}

function CardTwoClass() {
  let className = 'purpleClass';

  return <div className={className}>
    CARDDDDD NUMBER 2 2 2 2 2222 222 22222222222222222 2 2 2 2 22 22 2 22 22  2
  </div>
}

function CardThreeScssClass() {
  return <div className='class-3'>
    CARD NOMBER THREEE 3 3 3 3 3 3 3 3 3 3
  </div>
}

function CardThreeBootstrap() {
  return <div className="p-5 m-5 warning">
    Card 4 with oboooootstrap
  </div>
}

ReactDOM.render(
  <div className="wrapper">
    <CardOneInline />
    <CardTwoClass />
  </div>

  document.getElementById('root')
);

