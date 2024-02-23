import React, {useState, useEffect} from 'react'
import {Suspense} from "react"
import './App.css';
import Theme from './Context/Theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingNice from './Components/LoadingNice'
const Acceuil = React.lazy(() => import('./Pages/Acceuil'));
const Apropos = React.lazy(() => import('./Pages/Apropos'));
const Projet = React.lazy(() => import('./Pages/Projet'));
const Reconnaissance = React.lazy(() => import('./Pages/Reconnaissance'));
const Contact = React.lazy(() => import('./Pages/Contact'));


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
            <Suspense fallback={ <LoadingNice/> }>
                <div className='w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180vh] md:max-lg:h-[150dvh] bg-gradient-to-b from-indigo-200 to-fuchsia-300 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800'>
                <Router>
                  <Routes>
                    <Route path='/' element={<Acceuil/>}/>
                    <Route path='/apropos' element={<Apropos/>}/>
                    <Route path='/projet' element={<Projet/>}/>
                    <Route path='/reconnaissance' element={<Reconnaissance/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                  </Routes>
                </Router>
                </div>
            </Suspense>
    </Theme.Provider>
  );
}

export default App;
