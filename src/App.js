import React from 'react'
import Home from './components/Home'

function App() {
  if (window.location.pathname === '/') return <Home />
}

export default App
