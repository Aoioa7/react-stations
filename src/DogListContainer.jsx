// @ts-check
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

export const DogListContainer = () => {

  const [breeds,setbreeds] =useState([])
  var getBreeds=()=>{fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json()).then(data => setbreeds(data.message))}

  useEffect(()=>{getBreeds},[])

  /*return (
    <footer></footer>
  )*/
}

export default DogListContainer
