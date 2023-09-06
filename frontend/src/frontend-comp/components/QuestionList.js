import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';

function QuestionList({data}) {

    //console.log(ques);

    let tags = JSON.parse(data?.tags[0])
    //const tags=[]

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

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
                        <p>{data?.ansDetails?.length}</p>
                        <span>Answers</span>
                    </div>
                    <div className='ques-stat'>
                        <small>0 Views</small>
                    </div>
                </div>
            </div>
            <div className='ques-ans'>
                <Link to={`/view-question?q=${data?._id}`}>{data?.title}</Link>
                <div className='ans' style={{width:"90%"}}>
                    <div>{ReactHtmlParser(truncate(data?.body, 200))}
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    {
                        tags?.map((_tag, ind) => (
                            
                                
                                <span className='ques-tag' key={ind}>{_tag}</span>
                                
                           
                        ))
                    }</div>
                    
                <div className='author'>
                    <small>{
                            new Date(data?.created_at).toLocaleString()
                        }</small>
                    <div className='author-details'>
                        <Avatar src={data?.user?.photo}/>
                        <p>{data?.user?.displayName ? data?.user?.displayName : 'User Name' }</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionList
