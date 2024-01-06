// DO NOT DELETE

import { s } from 'vitest/dist/reporters-cb94c88b'
import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <body>
      <header className="header">
        <h1>reactアプリ</h1>
      </header>
      <main>
        <p>"ワンちゃんの画像を表示するサイト！"</p> 
        const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg");
        <img src={dogUrl}/>
      </main>
    </body>  
  )
}
