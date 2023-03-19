import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Feature = () => {

  let [fdata, setFdata] = useState({})

    useEffect(()=>{
        async function featurePart(){
            let featureData= await axios.get("https://bwfc-api.vercel.app/feature")
            setFdata(featureData.data);
        }
        featurePart()
    },[])

  return (
      <>
        <div className='absolute mt-24'>
      <img src={fdata.featureShape}/>
      </div>
    <div className='max-w-container mx-auto relative'>
      <div className='flex justify-between mt-28 '>
        <div className='w-6/12'>
        <img src={fdata.featureImage}/>
        </div>
        <div className='w-6/12 '>
          <h3 className='font-man font-extrabold text-lg text-primary'>{fdata.subTitle}</h3>
          <h1 className='font-man font-bold text-[50px] mt-6'>{fdata.title}</h1>
          <p className='font-man font-normal text-lg text-[#757095] mt-9'>{fdata.paragraph}</p>
          {fdata.button &&
          <a className="bg-primary text-white py-4 px-9 font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150 mx-2 inline-block mt-7"
          href="#">{fdata.button.text}</a> 
        }
        </div>
      </div>
    </div>
      </>
  )
}

export default Feature