// DO NOT DELETE

import './App.css'

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
        <img src="https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg"/>
      </main>
    </body>  
  )
}
