// @ts-check
import {useState} from 'react'
import {useEffect} from 'react'

export const DogListContainer = () => {

  var [breeds,setBreeds] =useState([])
  var getBreeds=()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => setBreeds(data.message))
  }

  useEffect(()=>{getBreeds},[])

  return (
    <footer></footer>
  )
}

export default DogListContainer
