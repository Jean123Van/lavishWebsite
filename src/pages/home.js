import React from 'react'
import './home.css'

function Home () {

    return (
        <>
            <div className = 'home-container'>
                <div className='home-body'>
                    <div className='home-desc'>
                        <p className='top-line'>EXCLUSIVE ACCESS</p>
                        <h1 className ='header'>Unlimited Transactions with zero fees</h1>
                        <p className='home-paragraph'>Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees</p>
                        <button>Get Started</button>
                    </div>
                    <img src = '/images/svg-1.svg' className ='home-image'/>
                </div>
            </div>
            <div className = 'home-container second'>
                <div className='home-body arrange'>
                    <div className='home-desc'>
                        <p className='top-line'>EASY SETUP</p>
                        <h1 className ='header new'>Super fast and simple onboarding process</h1>
                        <p className='home-paragraph new'>Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go</p>
                        <button>Get Started</button>
                    </div>
                    <img src = '/images/svg-7.svg' className ='home-image'/>
                </div>
            </div>
            <div className = 'home-container'>
                <div className='home-body'>
                    <div className='home-desc'>
                        <p className='top-line'>100% SECURE</p>
                        <h1 className ='header'>Stay protected 24/7 anywhere, anytime</h1>
                        <p className='home-paragraph'>We have you covered no matter where you are located. Over 140 locations woldwide to ensure you have access anytime</p>
                        <button>Get Started</button>
                    </div>
                    <img src = '/images/svg-5.svg' className ='home-image'/>
                </div>
            </div>
            <div className = 'home-container second'>
                <div className='home-body arrange'>
                    <div className='home-desc'>
                        <p className='top-line'>DATA ANALYTICS</p>
                        <h1 className ='header new'>Every transaction is stored on our secure cloud database</h1>
                        <p className='home-paragraph new'>Never ever have to worry about saved receipts. We store your data, so you can access it anytime</p>
                        <button>Get Started</button>
                    </div>
                    <img src = '/images/svg-8.svg' className ='home-image'/>
                </div>
            </div>
        </>
            
    )
}

export default Home;