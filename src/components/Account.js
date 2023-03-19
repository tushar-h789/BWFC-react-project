import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Account = () => {

    let[adata, setAdata] =useState({})


    useEffect(()=>{
        async function account(){
            let accountData= await axios.get("https://bwfc-api.vercel.app/account")
            setAdata(accountData.data)
        }
        account()
    },[])

  return (
    <div className='max-w-container mx-auto'>
        <div className='flex mt-[172px]'>
        <div className='w-6/12'>
            <h3 className='font-man font-extrabold text-lg text-primary'>{adata.subTitle}</h3>
            <h1 className='font-man font-bold text-[50px] mt-6 w-[479px]'>{adata.title}</h1>
            <p className='font-man font-normal text-lg text-[#757095] mt-6 w-[512px]'>{adata.paragraph}</p>

            {adata.button &&
            <a className="bg-primary text-white py-4 px-9 font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150 mx-2 inline-block mt-6"
            href="#">{adata.button.text}</a>
            }
        </div>
        <div className='w-6/12'>
            <img src={adata.accountImage}/>
        </div>
        </div>
    </div>
  )
}

export default Account