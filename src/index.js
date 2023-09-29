import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-jss';

const theme = {
  font: {
    soraFont: 'sora',
    interFont: 'Inter'
  },
  color: {
    primaryColor: '#120B48',
    black: '#141414',
    secondryColor: '#413C6D',
    grey: '#616163',
    ligthBlueTex: '#1B233D'
  },
  fontSize: {
    titleSiz: '64px',
    middleSiz: '40px',
    smallerTitleSize: '28px',
    textSize: '20px'
  },
  fontWidth: {
    largWidth: '700',
    middleWidth: '600',
    smallWidth: '400'
  },
  lineHeight: {
    titleHeight: '64px',
    middleHeight: '50.4px',
    smallerTitleHeight: '33.89px',
    textHeight: '28px'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
