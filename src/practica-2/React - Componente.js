import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Li = ({ children, propiedaPersonalizada }) => <li>{children} {propiedaPersonalizada}</li>
ReactDOM.render(
    <React.StrictMode>
        <Li propiedaPersonalizada={'Es un buen juego'}>{'Mario Bros'}</Li>
        <Li>{'Resident Evil'}</Li>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
