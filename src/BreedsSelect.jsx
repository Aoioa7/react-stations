// @ts-check
import {useState} from 'react'

// @ts-ignore
const selectOptions=(props)=>{
  props.breeds.map(
    (breed)=>{
    return <option value={breed}>{breed}</option>
    }
  )
}


export const BreedsSelect=()=>{
  var[selected,setSelected]=useState('');
  const handleChange=e=>{
    setSelected(e.targrt.value)
  } ;

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="default">犬種を選んでね</option>
        {selectOptions}
      </select>
    </div>
  )
}

export default BreedsSelect
