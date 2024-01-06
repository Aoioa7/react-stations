// @ts-check

// @ts-ignore
dogList=[]
export const BreedsSelect = (props,dogList) => {
  for(let i=0;i<props.breeds.length;i++){
    dogList.push(<option value={i}>{props.breeds[i]}</option>)
  }
  return (
    <div>
      <select name= "whichBreed">
        {dogList}
      <select/>
    </div>
  )
}

export default BreedsSelect
