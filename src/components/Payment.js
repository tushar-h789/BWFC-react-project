import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Payment = () => {

    let [pdata, setPdata] = useState({})


    useEffect(()=>{
        async function payment(){
            let paymentData= await axios.get("https://bwfc-api.vercel.app/payment")
            setPdata(paymentData.data)
        }
        payment()
    },[])

  return (
    <>
    <div className='absolute right-0 mt-16'>
        <img src={pdata.paymentShape}/>
    </div>
        <div className='max-w-container mx-auto relative'>
        <div className='flex bg-[#F3F7FA] py-[75px] rounded-xl mt-28'>
            <div className='w-6/12'>
                <h3 className='font-man font-extrabold text-lg text-primary'>{pdata.subTitle}</h3>
                <h2 className='font-man font-bold text-[50px] mt-6'>{pdata.title}</h2>
                <p className='font-man font-normal text-lg text-[#757095] mt-9 w-[512px]'>{pdata.paragraph}</p>
            </div>
            <div className='w-6/12'>
                <h3 className='font-man font-bold text-2xl text-primary'>Get Started for Free</h3>
                <div className=''>
                <input className='w-[356px] py-4 mt-6 font-man font-normal text-xl text-[#64607D]' placeholder='Email Address'/>
                <input className='w-[356px] py-4 mt-6 font-man font-normal text-xl text-[#64607D]' placeholder='Password'/>

                </div>
                <a className='bg-[#FF7F5C] py-4 px-[131px] inline-block mt-6 text-white font-man font-bold text-base cursor-pointer'>GET STARTED</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Payment