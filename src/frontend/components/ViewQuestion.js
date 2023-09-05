import React from 'react'
import MainQuestion from './MainQuestion'
import Sidebar from './Sidebar'

function ViewQuestion() {
  return (
    <div className='stkofl-index'>
      <div className='stkofl-index-content'>
        <Sidebar/>
        <MainQuestion />
      </div>
    </div>
  )
}

export default ViewQuestion