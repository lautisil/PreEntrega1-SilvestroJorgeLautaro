import React from 'react'
import ItemList from './ItemList'
import listProducts from './ListProducts'
import { useState,useEffect } from 'react'
import { Center } from '@chakra-ui/react'
import { Route } from 'react-router-dom'

const ItemListContainer = () => {

  const productos = listProducts

  return (
    <>
      <Center p="1rem">  
        <ItemList productos={productos} />
      </Center>
    </>
    
  )
}

export default ItemListContainer


 /*

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {  //simular demora
        resolve(productos)
      }, 3000)
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error)
    })
 */