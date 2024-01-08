// @ts-check
import {useState} from 'react'

// @ts-ignore

export const BreedsSelect=(props)=>{
  // @ts-ignore
  const selectOptions=
    Object.keys(props.breeds).map(
      // @ts-ignore
      (breed)=>{
       return <option value={breed}>{breed}</option>
      }
    )

  var[selected,setSelected]=useState('');
  // @ts-ignore
  const handleChange=e=>{
    setSelected(e.target.value)
  } ;
  //
  var[looking,setLooking]=useState([]);
  const look=()=>{
    var x=selected;
    fetch(`https://dog.ceo/api/breed/${x}/images/random/10`).then(response => response.json())
    // @ts-ignore
    .then(data => {setLooking(data.message)})
    .then(
      ()=>{
        looking.forEach((y)=>console.log(`<img src="${y}">`))
      }
    )
  }

  const images= 
    looking.map(
    (z)=>{
      return <img src={z} />
    }
  )
  
  //

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="">犬種を選んでね</option>
        {selectOptions}
      </select>
      <button onClick={look}>表示</button>
      {images}
    </div>
  )
}

export default BreedsSelect
