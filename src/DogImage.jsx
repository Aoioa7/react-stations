// @ts-check
import React,{useState} from 'react'

var [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg");
var renew = () => fetch("https://dog.ceo/api/breeds/image/random",{method:'GET'}).then(response => response.json()).then(data => {setDogUrl(data["message"])});

export  {dogUrl}
export {renew}

export const DogImage = () => {
  return (
    renew
  )
}

export default DogImage
