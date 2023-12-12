import { useState } from 'react';
import './App.css'
import AnimationRow from './components/AnimationRow';

export const images = [
  '/items/best-christmas.jpg',
  '/items/castle.jpg',
  '/items/baby-boss.jpg',
  '/items/christmas-chronics.jpg',
  '/items/couple.jpg',
  '/items/exchange.jpg',
  '/items/scrudge.jpg',
  '/items/flour-lava.jpg',
  '/items/mavka.jpg',
  '/items/freedom.jpg',
  '/items/leo.jpg',
  '/items/mitchel.jpg',
  '/items/never-look-up.jpg',
  '/items/red-message.jpg',
  '/items/bad-guys.jpg',
  '/items/shon.jpg',
  '/items/simple-christmas.jpg',
  '/items/together.jpg',
]

const iterations = Array.from({ length: 5 }, (_, index) => index + 1);

function App() {

  return (
  <>
    <div className="wrapper">
      <div className='container'>      
        <AnimationRow side={'left'}  id={0} shuffle plus={0 * 6} length={6} />
        <AnimationRow side={'right'} id={1} shuffle plus={1 * 6} length={6} />
        <AnimationRow side={'left'}  id={2} shuffle plus={2 * 6} length={6} />
        <AnimationRow side={'right'} id={3} shuffle plus={3 * 6} length={6} />
      </div>
    </div>
    
    <a href='https://github.com/Dearian27/slider'>
      <button className='gh'>
        Code
        <img src="/public/icons/github.png" alt="" />
      </button>
    </a>
  </>
  )
}

export default App
