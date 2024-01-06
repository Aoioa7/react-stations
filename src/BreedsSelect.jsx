// @ts-check

// @ts-ignore
var dogList=[]

export const BreedsSelect=(props,dogList)=>{
  for(let i=0;i<props.breeds.length;i++){
    dogList.push(<option value={i}>{props.breeds[i]}</option>)
  }
  return(
    <select name="whichBreed">
      {dogList}
    </select>
  )
}

export default BreedsSelect
