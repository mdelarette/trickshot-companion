import { useState, Suspense } from 'react'

import detectBrowserLanguage from 'detect-browser-language';

import { LanguageContext } from './features/translation/Context';

import './App.css'

import Layout from './assets/Layout'
import Arenas from './pages/Arenas'

function App() {
  const [userLangage, setUserLanguage] = useState(detectBrowserLanguage());

  return (
    <LanguageContext.Provider value={{ userLangage, setUserLanguage }}>
      <Suspense fallback={"loading"}>
        <Layout>
          <Arenas />
        </Layout>
      </Suspense>
    </LanguageContext.Provider>
  )
}

export default App
