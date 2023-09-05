import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from 'react-tag-input-component'


const Question = () => {

    const [tag, setTag] = useState([])

  return (
    <>
        <div className='add-ques'>
      <div className='add-ques-container'>
        <div className='head-title'>
            <h1>Ask a public question</h1>
        </div>
        <div className='ques-container'>
            <div className='ques-els'>
                <div className='ques-el'>
                    <div className='title'>
                        <h3>Title</h3>
                        <small> Be specific and imagine that you're asking a question to another person</small>
                        <input type='text' placeholder='Add the question title here' />
                    </div>
                </div>
                <div className='ques-el'>
                    <div className='title'>
                        <h3>Body</h3>
                        <small>Include all the details a person would need to answer this question.</small>
                        <ReactQuill className='react-quill' theme='snow'/>
                    </div>
                </div>
                <div className='ques-el'>
                    <div className='title'>
                        <h3>Tags</h3>
                        <small>Add up to 5 tags to describe your question</small>
                        <TagsInput name='tags' placeHolder='Press enter to add more tags'
                        value={tag} onChange={setTag}/>
                    </div>
                </div>
            </div>
        </div>
        <button className='button'>Add question</button>
      </div>
    </div>
    </>
    
  )
}

export default Question

