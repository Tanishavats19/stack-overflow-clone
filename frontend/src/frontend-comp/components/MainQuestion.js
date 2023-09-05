import { Bookmark, History, Margin } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { Link } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'

function MainQuestion() {

    const [show, setShow] = useState(false)

  return (
    <>
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2>Question Title</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p>Timestamp</p>
                        <p>
                            Active <span>Today</span>
                        </p>
                        <p>viewed <span>4 times</span></p>
                    </div>
                </div>
                <div className='ques-list'>
                    <div className='ques-list-container'>
                        <div className='ques-left'>
                            <div className='all-options'>
                                <p className='arrow'>▲</p>
                                <p className='arrow'>0</p>
                                <p className='arrow'>▼</p>
                                <Bookmark />
                                <History />
                            </div>
                        </div>
                        <div className='ques-ans'>
                            <p>This is the test question body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='author-details'>
                                    <Avatar />
                                    <p>User name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* All Answers list vvv */}
                
                <div className='ques-list' style={{
                    flexDirection:"column"
                }}>
                    <p style={{
                        marginBottom:"20px",
                        fontSize:"1.3rem",
                        fontWeight:"300"
                    }}>No. of answers</p>
                    <div className='ques-list-container'>
                        <div className='ques-left'>
                            <div className='all-options'>
                                <p className='arrow'>▲</p>
                                <p className='arrow'>0</p>
                                <p className='arrow'>▼</p>
                                <Bookmark />
                                <History />
                            </div>
                        </div>
                        <div className='ques-ans'>
                            <p>This is the test answer body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='author-details'>
                                    <Avatar />
                                    <p>User name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-ans'>
                    <h3 style={{
                        fontSize:"22px",
                        margin:"10px 0",
                        fontWeight:"400"
                    }}>Your Answer</h3>
                    <ReactQuill className='react-quill' theme='snow' style={{
                        height:"150px"
                    }}/>
                </div>
                <button style={{
                    maxWidth:"fit-content",
                    
                }}>Post your Answer</button>
            </div>
        </div>
    </>
  )
}

export default MainQuestion