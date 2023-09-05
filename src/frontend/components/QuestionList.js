import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function QuestionList() {
  return (
    <div className='ques-list'>
        <div className='ques-list-container'>
            <div className='ques-left'>
                <div className='ques-stats'>
                    <div className='ques-stat'>
                        <p>0</p>
                        <span>Votes</span>
                    </div>
                    <div className='ques-stat'>
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className='ques-stat'>
                        <small>0 Views</small>
                    </div>
                </div>
            </div>
            <div className='ques-ans'>
                <Link to='/view-question'>How could we ever know?</Link>
                <div className='ans' style={{width:"90%"}}>
                    <div>This is the answer to the above ques.Search for the keywords to learn more about each warning
                        Compiled with warnings.Search for the keywords to learn more about each warning
                        Compiled with warnings.
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <span className='ques-tag'>react</span>
                    <span className='ques-tag'>frontend</span>
                    <span className='ques-tag'>js</span>
                </div>
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='author-details'>
                        <Avatar />
                        <p>User Name</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionList
