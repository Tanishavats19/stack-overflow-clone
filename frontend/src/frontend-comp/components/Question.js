import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from 'react-tag-input-component'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/UserSlice'
import axios from 'axios'


const Question = () => {

    const user = useSelector(selectUser)

    const [loading, setLoading] = useState(false)
    const [tag, setTag] = useState([])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const navigate= useNavigate();

    const handleQuill =(value) => {
        setBody(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(title!=="" && body!==""){
            setLoading(true)
            const bodyJSON = {
                title: title,
                body: body,
                tag: JSON.stringify(tag),
                user: user
            }

            await axios.post('http://localhost:80/api/ques',bodyJSON).then((res) => {
                alert('Question added Successfully')
                setLoading(false)
                navigate('/')

            }).catch((err) => {
                console.log(err);
                setLoading(false)
            })
        }
    }

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
                        <input type='text' 
                        placeholder='Add the question title here'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className='ques-el'>
                    <div className='title'>
                        <h3>Body</h3>
                        <small>Include all the details a person would need to answer this question.</small>
                        <ReactQuill className='react-quill' 
                        theme='snow'
                        value={body}
                        onChange={handleQuill} />
                    </div>
                </div>
                <div className='ques-el'>
                    <div className='title'>
                        <h3>Tags</h3>
                        <small>Add up to 5 tags to describe your question</small>
                        <TagsInput name='tags' 
                        placeHolder='Press enter to add more tags'
                        value={tag} onChange={setTag}/>
                    </div>
                </div>
            </div>
        </div>
        <button className='button'
        type='submit'
        onClick={handleSubmit}
        disabled={loading}>
            {loading?'Adding...':'Add question'}
        </button>
      </div>
    </div>
    </>
    
  )
}

export default Question

