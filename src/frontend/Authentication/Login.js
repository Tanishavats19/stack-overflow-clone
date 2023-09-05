import React, { useState } from 'react'
import gLogo from '../images/G__Logo.svg'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import {useNavigate} from 'react-router-dom'

function Login() {

    const [register, setRegister] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSigninGoogle =() =>{
        setLoading(true)
        signInWithPopup(auth, provider).then((res) => {
            navigate('/')
            console.log(res)
            setLoading(false)
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setError("")
        setLoading(true)
        if(email === "" || password=== "" || username==="")
        {
            setError('Required field is missing')
            setLoading(false)
        }
        else{
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                setLoading(false)
                navigate('/')
                console.log(res)
            }).catch((error) => {
                console.log(error.code)
                setError(error.message)
                setLoading(false)
            })
        }
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        setError("")
        setLoading(true)
        if(email === "" || password=== "")
        {
            setError('Required field is missing')
            setLoading(false)
        }
        else{
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                navigate('/')
                console.log(res)
                setLoading(false)
            }).catch((error) => {
                console.log(error.code)
                setError(error.message)
                setLoading(false)
            })
        }
    }

  return (
    <div className='login'>
        <div className='login-container'>
            <p>Login using any of the following:</p>
            <div className='signin-ops'>
                <div className='signin-op' onClick={handleSigninGoogle}>
                    <img src={gLogo} alt='google' />
                    <p>{loading ? "Signing in...": "Login with Google"}</p>
                </div>
            </div>
            <div className='reg'>
                <div className='reg-container'>
                    {register ? (
                        <>
                            <div className='inp-field'>
                                <p>Username</p>
                                <input value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                type='text' />
                            </div>
                            <div className='inp-field'>
                                <p>Email</p>
                                <input type='text'
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='inp-field'>
                                <p>Password</p>
                                <input type='password'
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={handleRegister}
                            disabled={loading}
                            style={
                                {
                                    marginTop:"5px"
                                }
                            }>{loading ? 'Registering...':'Register'}</button>
                        </>
                    ): (
                        <>
                            <div className='inp-field'>
                                <p>Email</p>
                                <input type='text' 
                                 value={email} 
                                 onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='inp-field'>
                                <p>Password</p>
                                <input type='password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={handleSignIn}
                            disabled={loading}
                            style={
                                {
                                    marginTop:"5px"
                                }
                            }>
                                {loading ? 'Logging In...':'Login'}</button>  
                        </>
                    )}
                    <p onClick={() => setRegister(!register)}
                    style={{
                        marginTop:"10px",
                        textAlign:"center",
                        color:"#0095ff",
                        textDecoration:"underline",
                        cursor:"pointer"
                    }}>
                        {
                            register ? "Login" : "Register"
                        }?
                    </p>
                </div>
            </div>
            {error !== "" && (
                <p
                    style={{
                    color: "red",
                    fontSize: "14px",
                    }}
                >
                    {error}
                </p>
                )}

        </div>
    </div>
  )
}

export default Login