import React from 'react'

import { Header } from './components/organisms/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import './assets/styles/globals.css'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App
