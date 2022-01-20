import React, {useState} from 'react'
import './SignUp.css'
import {MdThumbsUpDown} from 'react-icons/md'
import {Link} from 'react-router-dom'

function SignUp () {

    const[register, setRegister] = useState(true);
    const[login, setLogin] = useState(false);

    return(
        <div className='signup-container'>
            <div className='signup-body'>
                <div className='signup-logo'>
                    <div className='signup-logo1'>
                        <MdThumbsUpDown className='signup-image'/>
                        <h1>LAVISH</h1>
                    </div>
                    <h1>Welcome!</h1>
                    <p>You are 30 seconds from getting your life started. Sign up now to have your account or log in to an existing one!</p>
                    <div className='signup-toggling'>
                        <h2 style={{fontSize:'15px', color:'white'}}>What do you want to do?</h2>
                        <label className='login-register'>
                            <input type='checkbox' onClick={()=>setLogin(!login)}/>
                            <span className='toggling-login'/>
                            <p style={{color: `${login ? 'blue' : 'white'}`, marginTop:'3px'}}>Login</p>
                            <p style={{color:'white'}}>or</p>
                            <p style={{color:`${login ? 'white' : 'blue'}`}}>Register</p>
                        </label>
                    </div>
                </div>
                <div className='signup-section'>
                    <div className='vertical-movement'>
                        <div className={login ? 'more-vertical-movement login-inactive' : 'more-vertical-movement'}>
                            <div className='signup-toggle'>
                                <label className='switch'>
                                    <input onClick={()=>setRegister(!register)} type='checkbox' className='switch1'/>
                                    <span className='slider'/>
                                    <p className='free'>Free Account</p>
                                    <p className='premium'>Premium Account</p>
                                </label>
                            </div>
                            <div className='movable-content'>
                                <div className={register ? 'position1' : 'position1 inactive-signup'}>
                                    <h1>Register a Free Account</h1>
                                    <div className='signup-input'>
                                        <form>
                                            <input type='text' placeholder='First Name'/>
                                            <input type='text' placeholder='Last Name'/>
                                            <input type='text' placeholder='Password'/>
                                            <input type='text' placeholder='Confirm Password'/>
                                            <input type='text' placeholder='Email'/>
                                            <input type='text' placeholder='Phone'/>
                                            <input type='text' placeholder='Security Question'/>
                                            <input type='text' placeholder='Answer to Security Question'/>
                                        </form>
                                        <div className='checkbox'>
                                            <input type='radio' id='male' name='gender'></input>
                                            <label>male</label>
                                            <input type='radio' id='female' name='gender'></input>
                                            <label>female</label>
                                        </div>
                                        <div style={{display:'flex', width:'72%', height:'10%'}}>
                                            <button>Register</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={register ? 'position2' : 'position2 active-signup'}>
                                    <h1>Get Access to Premium</h1>
                                    <div className='signup-input'>
                                        <form>
                                            <input type='text' placeholder='First Name'/>
                                            <input type='text' placeholder='Last Name'/>
                                            <input type='text' placeholder='Password'/>
                                            <input type='text' placeholder='Confirm Password'/>
                                            <input type='text' placeholder='Email'/>
                                            <input type='text' placeholder='Phone'/>
                                            <input type='text' placeholder='Security Question'/>
                                            <input type='text' placeholder='Answer to Security Question'/>
                                            <input type='text' placeholder='Credit Card Number'/>
                                            <input type='text' placeholder='CCV'/>
                                        </form>
                                        <div className='checkbox'>
                                            <input type='radio' id='male' name='gender'></input>
                                                <label>male</label>
                                                <input type='radio' id='female' name='gender'></input>
                                                <label>female</label>
                                        </div>
                                        <div style={{display:'flex', width:'72%', height:'10%'}}>
                                            <button>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={login ? 'vertical-login login-active' : 'vertical-login'}>
                            <div className='login-page'>
                                <h1>Login</h1>
                                <div className='login-segment'>
                                    <form>
                                        <input type='text' placeholder='Username'/>
                                        <input type='text' placeholder='Password'/>
                                    </form>
                                    <label>
                                        <input type='checkbox'/>
                                        Remember
                                    </label>
                                    <button>Login</button>
                                </div>
                                <div className='login-forgot'>
                                    <p><span>Forgot your password?</span> <Link to=''>Click here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;