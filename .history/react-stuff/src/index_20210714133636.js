import React from 'react';
import ReactDOM from 'react-dom';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();