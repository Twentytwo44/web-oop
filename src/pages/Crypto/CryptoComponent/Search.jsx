import React from 'react'
import searchIcon from '/src/assets/search-icon.svg'
export const Search = () => {
  return (
    <>
    <form className='w-96 relative flex items-center ml-7 font-nunito'>
        <input type="text" name='search' className='w-full rounded bg-gray-600 
        placeholder:text-gray-500 pl-2 required outline-0 border border-transparent 
        focus:border-[#00FFFF]' placeholder='search here...'/>
        <button type='submit'>
            <img src={searchIcon} alt="search" 
            className='absolute right-1 top-[0.7rem] cursor-pointer'/>
        </button>
    </form>
    </>
  )
}
