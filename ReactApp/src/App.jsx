import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'
import Student from './Student'
function App() {

  return (
    <>
      <Greeting/>
      <Student name={'Krati'} age={18}/>
    </>
  )
}

export default App
