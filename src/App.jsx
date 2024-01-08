// DO NOT DELETE
//import { s } from 'vitest/dist/reporters-cb94c88b.d.ts'

import './App.css'

import Header from './Header'
import {Description} from './Description'
import {DogListContainer} from './DogListContainer'

/** 
 *@type {() => JSX.Element}
*/

export const App=()=>{
  return(
      <div>
        <Header/>
        <Description/>
        <DogListContainer/>
      </div>
  )
}


/*export const App = () => {
  var [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg");
  var renew = () => fetch("https://dog.ceo/api/breeds/image/random",{method:'GET'}).then(response => response.json()).then(data => {setDogUrl(data["message"])});

  return (
    <body>
      <header className="headhead">
        <h1>reactアプリ</h1>
      </header>
      <main>
        <p>ワンちゃんの画像を表示するサイト！</p> 
        <button className="button" onClick={renew}>" 画像を更新しよう！"</button>
        <img src={dogUrl}/>
      </main>
    </body>  
  )
}*/
