import React, {useState, Suspense  } from 'react'

import detectBrowserLanguage from 'detect-browser-language';

import { LanguageContext } from './features/translation/Context.js';

import './App.css'

import Arenas from './pages/Arenas'




function App() {

  const [userLangage, setUserLanguage] = useState(detectBrowserLanguage());
  console.log('detectBrowserLanguage userLangage', userLangage);


  return (

    <LanguageContext.Provider value={userLangage}>


    <Suspense fallback={"loading"}>
      <Arenas />
    </Suspense>

    </LanguageContext.Provider>

  )
}

export default App
