// @ts-check
import {useState} from 'react'
import {DogImage} from './DogImage'

var [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg");
var renew = () => fetch("https://dog.ceo/api/breeds/image/random",{method:'GET'}).then(response => response.json()).then(data => {setDogUrl(data["message"])});


export const Description =()=> {
  return (
    <main>
        <p>ワンちゃんの画像を表示するサイト！</p> 
        <button className="button" onClick={renew}>" 画像を更新しよう！"</button>
        <DogImage imageUrl={dogUrl}/>
    </main>
  );
}
