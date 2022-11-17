import React from 'react';
import './app.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main';

export const App = () => {
  return (
    <div className='app'>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </div>
  )
}
