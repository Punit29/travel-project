import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

export default Navbar