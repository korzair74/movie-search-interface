import React from 'react'

export default function SearchMovie() {
  return (
    <form className='form'>
      <lable className='label' htmlFor='query'>Movie Name</lable>
      <input className='input' type='text' name='query'
        placeholder='i.e. Jurassic Park' />
      <button className='button' type='submit' >Search</button>  
    </form>
  )
}