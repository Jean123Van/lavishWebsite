import React, {useState} from 'react'
import './Products.css'


function Products () {

    const[img, setImg] = useState('img1');

    return (
        <div className='products-container'>
            <div className='products-body'>
                <div className='products-content'>
                    
                    {img==='img1' && 
                        <div className='products-desc'>
                            <h1>It's more than just a credit card.</h1>
                            <h1><span>It's a Lifestyle</span></h1>
                            <h2>See real-time transactions and be completely aware of your credit card activity from anywhere and anytime. With our easy-access system, all it takes is one click of a button.</h2>
                            <button>Get Started Now!</button>
                        </div>
                    }
                    {img==='img2' && 
                        <div className='products-desc'>
                            <h1>Peace of mind is our number 1 priority.</h1>
                            <h1><span>Track and Trace</span></h1>
                            <h2>Worried about getting hacked? Our self-learning AI system makes sure to identify suspiscious and unusual activity. It bares questionable activity and sends you an alert to confirm if it is you.</h2>
                            <button>Get Started Now!</button>
                        </div>
                    }
                    {img==='img3' && 
                        <div className='products-desc'>
                            <h1>Convenience without compromises</h1>
                            <h1><span>Safe and Secure</span></h1>
                            <h2>Make transactions anywhere and anytime you want. All that convenience without any drawbacks. Our secure system ensures that despite ease of use, gaining unknown and unwarranted access is impossible.</h2>
                            <button>Get Started Now!</button>
                        </div>
                    }
                    {img==='img4' && 
                        <div className='products-desc'>
                            <h1>Refunds and Cancels?</h1>
                            <h1><span>One click to reverse a transaction</span></h1>
                            <h2>Change of mind? Made a mistake? We got you covered. Request for a refund with only a click of a button.</h2>
                            <button>Get Started Now!</button>
                        </div>
                    }               
                    
                    <div className='products-image'>
                        <img src ={img === 'img1' ? '/images/svg-2.svg' : (img==='img2'? '/images/svg-3.svg' : (img==='img3' ? '/images/svg-4.svg':(img==='img4' ? '/images/svg-6.svg': null) ))} className='image-active'/>
                    </div>
                </div>
                <div className='products-control'>
                    <img src='/images/svg-2.svg' className='imgs' onClick={()=>setImg('img1')}/>
                    <img src='/images/svg-3.svg' className='imgs' onClick={()=>setImg('img2')}/>
                    <img src='/images/svg-4.svg' className='imgs' onClick={()=>setImg('img3')}/>
                    <img src='/images/svg-6.svg' className='imgs' onClick={()=>setImg('img4')}/>
                </div>
            </div>
        </div>
    )
}

export default Products;