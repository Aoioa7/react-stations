// @ts-check
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

export const DogListContainer = () => {

  const [breeds,setBreeds] =useState([])
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json())
    .then(data => setBreeds(data.message)).then(console.log(breeds))

  },[])

  return (
    <footer></footer>
  )
}

export default DogListContainer
