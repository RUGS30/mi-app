import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Li = ({ children, estado,casa,edad }) => {

  console.log(casa,edad);
  return (
    <li>{children} esta {estado}</li>
  )
} 

const X = () =>
  <ul>
    <Li 
    estado={'feliz'}
    casa = {false}
    edad = {2023-1999}
    >Chanchito
    </Li>
    <Li estado={'triste'}>Vanessa</Li>
    <Li estado={'enojado'}>Felipe</Li>
  </ul>

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(
//   <X/>, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
