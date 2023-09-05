import { Public, Stars } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-container'>
            <div className='sidebar-options'>
            <div className='sidebar-option'>
                <Link>HOME</Link>
            </div>
            <div className='sidebar-option'>
                <Link>PUBLIC</Link>
                <div className='link'>
                    <div className='link-tag'>
                        <Public />
                        <Link>Questions</Link>
                    </div>
                    <div className='tags'>
                        <p>Tags</p>
                        <p>Users</p>
                    </div>
                </div>
            </div>
            <div className='sidebar-option'>
                <Link>COLLECTIVES</Link>
                <div className='link'>
                    <div className='link-tag'>
                        <Stars />
                        <Link>Explore Collectives</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
