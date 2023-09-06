import { FilterList } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import QuestionList from './QuestionList'

function Main({ques}) {
  return (
    <div className='main'>
        <div className='main-container'>
            <div className='main-top'>
                <h2>All Questions</h2>
                <Link to='/add-question'>
                    <button>Ask a Question</button>
                </Link>
            </div>
            <div className='main-desc'>
                <p><b>{ques && ques.length}</b> Questions</p>
                <div className='main-filter'>
                    <div className='main-tabs'>
                        <div className='main-tab'>
                            <Link>Newest</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>Active</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>More</Link>
                        </div>
                    </div>
                    <div className='main-filter-tab'>
                        <FilterList />
                        <p>Filter</p>
                    </div>
                </div>
            </div>
            <div className='question-list'>
                {
                    ques?.map((_q) => (
                        
                        <div key={_q._id} className='question'>
                            <QuestionList data={_q}/>
                         </div>
                        
                    ))
                
                }
            </div>
        </div>
    </div>
  )
}

export default Main
