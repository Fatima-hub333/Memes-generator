import React from 'react'
import memesData from '../memesData'

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("")
  /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <main>
      <div className='form'>
        <input type="text" placeholder="Top Text" className='form--inputs'/>
        <input type="text" placeholder="Bottom Text" className='form--inputs'/>
        <button className='form--button' onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
      <img src={memeImage} alt="Memes" className="meme--image"/>
    </main>
  )
}