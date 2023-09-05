import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

function Whole() {
  return (
    <div className='stkofl-index'>
      <div className='stkofl-index-content'>
        <Sidebar/>
        <Main />
      </div>
    </div>
  )
}

export default Whole
