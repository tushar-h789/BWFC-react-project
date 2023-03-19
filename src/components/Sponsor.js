import axios from "axios";
import React, { useEffect, useState } from "react";

const Sponsor = () => {
  let [sdata, setSdata] = useState({});
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    async function sponsor() {
      let sponsorData = await axios.get("https://bwfc-api.vercel.app/sponsor");
      setSdata(sponsorData.data);
      setLoader(false);
    }
    sponsor();
  }, []);

  if (loader) {
    return <h1>wait ...</h1>;
  }

  return (
    <div className="max-w-container mx-auto">
      <div className=" flex justify-center">
        <h3 className="font-man font-normal text-2xl"> {sdata.title}</h3>
      </div>

      <div className="flex justify-center gap-14 mt-9">
        {sdata.logos.map((item, index)=>(
            <img key={index} src={item.src}/>
        ))}
    
      </div>

    </div>
  );
};

export default Sponsor;
