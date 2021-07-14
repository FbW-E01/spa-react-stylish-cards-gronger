import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


function CardOneInline() {
  const divStyle = {
    border: '26px solid red',
    margin: 'auto',
    padding: '20px',
    width: '30%',
  }

  return <div style={divStyle}>
    Card number one :D :D: D:D :D: :D :D :D :D :D :D :D: D: :D :D: D: :D :D :D --- tHIs card was designed using inline styling
  </div>
}

function CardTwoClass() {
  let className = 'purpleClass';

  return <div className={className}>
    CARDDDDD NUMBER 2 --- this card was designed by adding a class to the div, which was previously defined as a variable within the function. Styling was added to the class in an scss file.
  </div>
}

function CardThreeScssClass() {
  return <div className='class-3'>
    CARD NOMBER THREEE 3 -- also styled in the scss file. THis time with no variable.
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
    <MyDiv><h1>Hello</h1>
    <p>fffffffffffffffffffffffffffffffff</p></MyDiv>
  </div>

  , document.getElementById('root')
);


