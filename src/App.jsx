import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Content from './components/Content/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>

    </>
  )
}

export default App
