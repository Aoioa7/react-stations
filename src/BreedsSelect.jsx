// @ts-check

// @ts-ignore
const selectOptions=(props)=>{
  props.breeds.map(
    (breed)=>{
    return <option value={breed}>{breed}</option>
    }
  )
}


export const BreedsSelect=(props)=>{
  
  return(
    <select name="whichBreed">
      {selectOptions}
    </select>
  )
}

export default BreedsSelect
