import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import axios from 'axios'

function Whole() {

  const [ques, setQues] = React.useState([])

  React.useEffect(() => {
    async function getQues() {
      await axios
      .get('http://localhost:80/api/ques')
      .then((res) => {
        console.log(res.data)
        setQues(res.data.reverse())
      })
      .catch((err) => {
        console.log(err);
      })
    }
    getQues();
  }, [])

  return (
    <div className='stkofl-index'>
      <div className='stkofl-index-content'>
        <Sidebar/>
        <Main ques={ques} />
      </div>
    </div>
  )
}

export default Whole
