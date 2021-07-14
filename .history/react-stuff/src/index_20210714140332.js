import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


function CardOneInline() {
  const divStyle = {
    border: '16px solid red',
    padding: '20px',
  }

  return <div style={divStyle}>
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

function CardFourBootstrap() {
  return <div className="p-5 m-5 warning bg-dark text-light">
    Card 4 with oboooootstrap ap ap apapp 
  </div>
}

const MyDiv = styled.div`
  border: 4px solid green;
  color: red;
`;

ReactDOM.render(
  <div className="wrapper">
    <CardOneInline />
    <CardTwoClass />
    <CardThreeScssClass />
    <CardFourBootstrap />
    <MyDiv />
  </div>

  , document.getElementById('root')
);


