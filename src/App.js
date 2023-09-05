import React, { useEffect } from 'react';
import './App.css';
import Header from './frontend/components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Whole from './frontend/components/Whole';
import Question from './frontend/components/Question';
import ViewQuestion from './frontend/components/ViewQuestion';
import Login from './frontend/Authentication/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(
          login({uid: authUser.uid,
            photo: authUser.photoURL,
            displayName:authUser.displayName,
            email:authUser.email
          })
        )
      }
      else {
        dispatch(logout());
      }
    })
  }, [dispatch])


  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route exact path={user?'/':'/auth'} Component={user? Whole : Login} />
          <Route exact path='/' Component={Whole} />
          <Route exact path='/add-question' Component={Question} />
          <Route exact path='/view-question' Component={ViewQuestion} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
