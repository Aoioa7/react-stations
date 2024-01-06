// DO NOT DELETE

//import { s } from 'vitest/dist/reporters-cb94c88b'

import './App.css'
import { useState } from 'react'

/** 
 @type {() => JSX.Element}
*/
export const App = () => {
  var [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg",{method:'GET'});
  var next;
  fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => {next=data["message"]});
  var renew=()=>{setDogUrl(dogUrl=next)};
  return (
    <body>
      <header className="header">
        <h1>reactアプリ</h1>
      </header>
      <main>
        <p>"ワンちゃんの画像を表示するサイト！"</p> 
        <button onClick={renew}>" 画像を更新しよう！"</button>
        <img src={dogUrl}/>
      </main>
    </body>  
  )
}
