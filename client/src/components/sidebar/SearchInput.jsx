/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form>
        <input type="text" placeholder="Search..." action="" className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch />
        </button>
    </form>
  );
}

export default SearchInput;