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

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="">犬種を選んでね</option>
        {selectOptions};
      </select>
    </div>
  )
}

export default BreedsSelect
