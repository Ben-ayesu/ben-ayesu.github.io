import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Main() { 
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return ( 
      <React.StrictMode>
        <body className={darkMode ? 'dark' : ''}>  
          <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> 
        </body>
      </React.StrictMode>
  );
}

root.render(<Main />); 

reportWebVitals();