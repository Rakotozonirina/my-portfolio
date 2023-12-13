import React, {useState, useEffect} from 'react'
import './App.css';
import Theme from './Context/Theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Acceuil } from './Pages/Acceuil'
import { Apropos } from './Pages/Apropos'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || ' ');

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if(theme === ' '){
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  },[theme]);
  return (
    <Theme.Provider value={{currentTheme: theme, changeCurrentTheme}}>
    <div className='w-full h-[100dvh] bg-gradient-to-b from-indigo-200 to-fuchsia-300 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800'>
      <Router>
        <Routes>
          <Route path='/' element={<Acceuil/>}/>
          <Route path='/apropos' element={<Apropos/>}/>
        </Routes>
      </Router>
      </div>
    </Theme.Provider>
  );
}

export default App;
