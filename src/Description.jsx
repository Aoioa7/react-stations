// @ts-check
import {dogUrl} from './DogImage'
import {renew} from './DogImage'

export const Description = () => {
  return (
    <main>
        <p>ワンちゃんの画像を表示するサイト！</p> 
        <button className="button" onClick={renew}>" 画像を更新しよう！"</button>
        <img src={dogUrl}/>
    </main>
  )
}

export default Description
