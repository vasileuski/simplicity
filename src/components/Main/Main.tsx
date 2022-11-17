import React from 'react';
import './main.scss';
import { ReactComponent as Dot } from '../../assets/dot.svg'

export const Main = () => {
  return (
    <div className='main'>
        <h2 className='main__title'>The Power of Simplicity</h2>
        <p className='main__description'>Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
        <button className='main__button'>Learn</button>
        <p>
          <Dot className='main__dot'/>
          <Dot className='main__dot'/>
          <Dot className='main__dot'/>
          <Dot className='main__dot'/>
          <Dot className='main__dot'/>
        </p>
    </div>
  )
}
