import React from 'react'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import './assets/styles/globals.css'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contact'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div>
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
