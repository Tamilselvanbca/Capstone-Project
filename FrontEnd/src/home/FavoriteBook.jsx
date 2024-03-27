import React, { useEffect, useState } from 'react'
import Bookcards from '../components/Bookcards';

const FavoriteBook = () => {
    const [books, setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/all-books").then(res=>res.json()).then(data=> setBooks(data))
    }, [])
  return (
    <div >
       <Bookcards className='' books={books} headLine=" Best Seller Books"/>
    </div>
  )
}

export default FavoriteBook