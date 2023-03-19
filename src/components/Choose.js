import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Choose = () => {

    let [CData, setCData] = useState({})
    let [loader, setLoader]= useState(true)

    useEffect(()=>{
        async function choose(){
            let chooseData= await axios.get("https://bwfc-api.vercel.app/choose")
            setCData(chooseData.data)
            setLoader(false)
        }
        choose()
    },[])

    if(loader){
        return <h1>Loading data....</h1>
    }

  return (
    <div className='max-w-container mx-auto mt-[94px] py-14 px-20 bg-[#F3F7FA] rounded-2xl'>
        <div className=''>
            <h4 className='font-man font-extrabold	text-xl text-primary flex justify-center'>{CData.subTitle}</h4>
            <h2 className='flex justify-center font-man font-bold text-[50px]'>{CData.title}</h2>
        </div>
        <div className='flex'>
            {CData.items.map(citem=>(
                <div className='flex w-6/12'>
            <h3>{citem.title}</h3>
        </div>
            ))}
        <div className='flex w-6/12'>asdfads</div>
        </div>
    </div>
  )
}

export default Choose