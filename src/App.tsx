import React from 'react'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contact'
import { Footer } from './components/Footer'
import './assets/styles/globals.css'
import { ScrollToTop } from './components/ScrollToTop'

export const App: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
