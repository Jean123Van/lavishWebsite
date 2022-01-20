import React from 'react'
import './services.css'
import {FaFire} from 'react-icons/fa'
import {BsFillXDiamondFill} from 'react-icons/bs'
import {GiCutDiamond} from 'react-icons/gi'


function Services () {

    return (
        <div className='services-container'>
            <div className='services-body'>
                <h1>Pricing</h1>
                <div className='services-content'>
                    <div className='services-card'>
                        <FaFire className='pricing-logo'/>
                        <div className='card-subset'>
                            <h2>Starter</h2>
                            <h1>$8.99</h1>
                            <p>per month</p>
                        </div>
                        <ul>
                            <li>100 Transactions</li>
                            <li>2% Cash Back</li>
                            <li>$10,000 Limit</li>
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                    <div className='services-card'>
                        <BsFillXDiamondFill className='pricing-logo'/>
                        <div className='card-subset'>
                            <h2>Gold</h2>
                            <h1>$29.99</h1>
                            <p>per month</p>
                        </div>
                        <ul>
                            <li>1000 Transactions</li>
                            <li>3.5% Cash Back</li>
                            <li>$100,000 Limit</li>
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                    <div className='services-card'>
                        <GiCutDiamond className='pricing-logo'/>
                        <div className='card-subset'>
                            <h2>Diamond</h2>
                            <h1>$99.99</h1>
                            <p>per month</p>
                        </div>
                        <ul>
                            <li>Unlimited Transactions</li>
                            <li>5% Cash Back</li>
                            <li>Unlimited Spending</li>
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;