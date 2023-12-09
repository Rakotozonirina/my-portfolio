import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from '../src/Components/Navbar'
import Theme from './Context/Theme'

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
      <div className='w-full h-[100dvh] bg-gradient-to-b from-indigo-200 to-fuchsia-300'>
      <Navbar/>
      </div>
    </Theme.Provider>
  );
}

export default App;
