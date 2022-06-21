import React from 'react'
import memesData from '../memesData'

export default function Meme() {
  let url;

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
    console.log(url)
  }
  return (
    <main>
      <p>{url}</p>
      <div className='form'>
        <input type="text" placeholder="Top Text" className='form--inputs'/>
        <input type="text" placeholder="Bottom Text" className='form--inputs'/>
        <button className='form--button' onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
    </main>
  )
}