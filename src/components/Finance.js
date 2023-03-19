import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Finance = () => {

    let [fData, setFData] = useState({})

    useEffect(()=>{
        async function finance(){
            let finamceData= await axios.get("https://bwfc-api.vercel.app/finance")
            setFData(finamceData.data);
        }
        finance()
    })

  return (
    <div className='max-w-container mx-auto mt-[156px]'>
        <div className='flex'>
            <div className='w-6/12'>
                <h4 className='font-man font-extrabold text-lg text-primary'>{fData.sunbTitle}</h4>
                <h2 className='font-man font-bold text-[50px] w-[479px]'>{fData.heading}</h2>
                <p className='font-man font-normal text-base text-[#757095] w-[512px]'>{fData.paragraph}</p>

                {fData.button &&
                    <a className="bg-primary text-white py-4 px-9 font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150 mx-2 inline-block mt-7"
                    href="#">{fData.button.text}</a>
                }
            </div>
            <div className='w-6/12'>
                <img src={fData.image}/>
            </div>
        </div>
    </div>
  )
}

export default Finance