import { useState, Suspense } from 'react'

import detectBrowserLanguage from 'detect-browser-language';

import { LanguageContext } from './features/translation/Context';

import './App.css'

import Layout from './assets/Layout'
import Arenas from './pages/Arenas'
import Faceoff from './pages/Faceoff'

type PageType = 'arenas' | 'faceoff';

function App() {
  const [userLangage, setUserLanguage] = useState(detectBrowserLanguage());
  const [currentPage, setCurrentPage] = useState<PageType>('arenas');
  const [arenaRank, setArenaRank] = useState<number | ''>('');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <LanguageContext.Provider value={{ userLangage, setUserLanguage }}>
      <Suspense fallback={"loading"}>
        <Layout currentPage={currentPage} onNavigate={handleNavigate}>
          {currentPage === 'arenas' && <Arenas arenaRank={arenaRank} setArenaRank={setArenaRank} />}
          {currentPage === 'faceoff' && <Faceoff />}
        </Layout>
      </Suspense>
    </LanguageContext.Provider>
  )
}

export default App
