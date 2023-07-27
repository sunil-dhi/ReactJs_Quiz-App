import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (

    <div className='header'>
        <Link className='title' to="/">
                Intuitive Quiz app
        </Link>
        <hr className='divider' />
     </div>
  )
}

export default Header