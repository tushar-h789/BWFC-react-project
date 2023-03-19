import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Residence = () => {

    let[rdata, setRdata] =useState({})


    useEffect(()=>{
        async function residence(){
            let residenceData= await axios.get("https://bwfc-api.vercel.app/residence")
            setRdata(residenceData.data)
            console.log(residenceData.data);
        }
        residence()
    },[])

  return (
    <div className='max-w-container mx-auto'>
        <p className='font-man font-normal text-2xl w-[795px] text-[#757095]'>{rdata.text}</p>
        {rdata.button &&
            <a className="py-4 px-9 bg-[#FF7F5C] inline-block mt-7 rounded-full text-white font-man font-bold text-base absolute right-20 bottom-[-2160px]" href="#">{rdata.button.text}</a>
        }
    </div>
  )
}

export default Residence