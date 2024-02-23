import React, {useState, useEffect} from 'react'
import './App.css';
import Theme from './Context/Theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Acceuil } from './Pages/Acceuil'
import { Apropos } from './Pages/Apropos'
import { Projet } from './Pages/Projet'
import { Reconnaissance } from './Pages/Reconnaissance'
import { Contact } from './Pages/Contact'
import LoadingNice from './Components/LoadingNice';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || ' ');
  const [loading, setLoading] = useState(true);

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
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
  return (
    <Theme.Provider value={{currentTheme: theme, changeCurrentTheme}}>
      {loading ? ( <LoadingNice/> ) : (
            <>
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
            </>
        )}
    </Theme.Provider>
  );
}

export default App;
