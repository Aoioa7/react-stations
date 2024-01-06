// @ts-check
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {BreedsSelect} from './BreedsSelect'

export const DogListContainer = () => {

  const [breeds,setBreeds] =useState([])
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json())
    // @ts-ignore
    .then(data => setBreeds(data.message)).then(console.log(breeds))

  },[])

  return (
    <footer>
      <BreedsSelect breeds={breeds} />
    </footer>
  )
}

export default DogListContainer
