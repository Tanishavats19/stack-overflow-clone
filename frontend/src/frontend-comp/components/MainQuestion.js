import { Bookmark, History, Margin } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import { Link } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/UserSlice'
import ReactHtmlParser from 'react-html-parser'

function MainQuestion() {

    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");
    //console.log(id);

    const [show, setShow] = useState(false)
    const [quesData, setQuesData] = useState();
    const [ans, setAns] = useState("");

    const user = useSelector(selectUser);

    const handleQuill = (value) => {
        setAns(value)
    }

    const handleSubmit = async () => {
        if(ans !==""){
        const body = {
          ques_id: id,
          ans: ans,
          user: user,
        };
        const config = {
          headers: {
            "Content-Type": "application/json",
          }
        }

        await axios.post('/api/ans', body, config)
        .then((res) => {
            console.log(res.data)
            alert('Answer added successfully')
            
            getUpdatedAns();
            setAns(" ");
        }).catch((err) => console.log(err))
    }
}

    useEffect(() => {
        async function getQuesDetails() {
          await axios
            .get(`/api/ques/${id}`)
            .then((res) => {
                setQuesData(res.data[0])
            })
            .catch((err) => console.log(err));
        }
        getQuesDetails();
      }, [id]);

      async function getUpdatedAns() {
        await axios
          .get(`/api/ques/${id}`)
          .then((res) => {
             setQuesData(res.data[0])
          })
          .catch((err) => console.log(err));
      }


  return (
    <>
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2>{quesData?.title}</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p>{ new Date(quesData?.created_at).toLocaleString()}</p>
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
                            <p>{ReactHtmlParser(quesData?.body)}</p>
                            <div className='author'>
                                <div className='author-details'>
                                    <Avatar src={quesData?.user?.photo}/>
                                    <p>{quesData?.user?.displayName ? quesData?.user?.displayName : 'User Name' }</p>
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
                    }}>{quesData?.ansDetails?.length} Answers</p>
                    
                    {quesData?.ansDetails.map((_q) => (
                    <>
                        <div
                             style={{
                                borderBottom: "1px solid #eee",
                                }}
                                key={_q._id}
                                className='ques-list-container'>
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
                            <p>{ReactHtmlParser(_q.ans)}</p>
                            <div className='author'>
                                <small>answered {new Date(quesData?.created_at).toLocaleString()}</small>
                                <div className='author-details'>
                                    <Avatar />
                                    <p> {_q?.user?.displayName
                                        ? _q?.user?.displayName
                                        : "User Name"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div> 
                        </>
                        ))}
                    </div>
                </div>
                <div className='main-ans'>
                    <h3 style={{
                        fontSize:"22px",
                        margin:"10px 0",
                        fontWeight:"400"
                    }}>Your Answer</h3>
                    <ReactQuill className='react-quill' 
                    theme='snow' 
                    style={{
                        height:"150px"
                    }}
                    value={ans}
                    onChange={handleQuill}/>
                </div>
                <button style={{
                    maxWidth:"fit-content",
                    
                }}
                onClick={handleSubmit}
                >Post your Answer</button>
            </div>
        
    </>
  )
}

export default MainQuestion