import React from 'react';

export default function Details({data}) {
    let url = window.location.href;
    let param = window.location.pathname;
    param=param.substring(1);
    const makeDistinct=Array.from(new Set(data.map(prop=>prop["Top Ten"])))
   .map(id=>{
     return {
       Brand: data.find(s=>s["Top Ten"]===id).Brand,
       Variety: data.find(s=>s["Top Ten"]===id).Variety,
       Style: data.find(s=>s["Top Ten"]===id).Style,
       Stars: data.find(s=>s["Top Ten"]===id).Stars,
       id:id,
     }
   })
   const makeCountry=Array.from(new Set(data.map(prop=>prop["Country"])))
   .map(id=>{
       return {
        Brand: data.find(s=>s["Country"]===id).Brand,
        Variety: data.find(s=>s["Country"]===id).Variety,
        Style: data.find(s=>s["Country"]===id).Style,
        id:id,
        Stars: data.find(s=>s["Country"]===id).Stars,
        "Top Ten": data.find(s=>s["Country"]===id)["Top Ten"]
       }
   })
   const filterCountry=data.filter(d=>d.Country===param && d.Brand)
   const displayData= filterCountry.map(p=>(
            <div className="card">
           <div className="row">
               <div className="col">
           {Object.values(p)[0] }
           </div>
           <div className="col">
           {Object.values(p)[1] }
           </div>
           <div className="col">
           {Object.values(p)[2]==="NaN"?"No variant available":Object.values(p)[2] }
           </div>
           <div className="col">
           {Object.values(p)[3] }
           </div>
           <div className="col">
           {Object.values(p)[4]==="NaN"?'Not Rated Any': Object.values(p)[4]} Stars
           </div>
           <div className="col">
           {Object.values(p)[5]==="NaN"?"-":Object.values(p)[5]} 
           </div>
           </div>
           </div>

   ))
const sortIt =()=>(
    (displayData.length<2)&&
        alert('Less Entries are there')
)
  return (
    <>
    <br/>
    <br/>

            <div className="container" >
               
                <center>
                    
                    <h4 style={{color:'white'}}> The details for the country {param} are:</h4></center>
        
                    <button disabled className="btn btn-primary" onClick={sortIt}>Top 10</button>
                    <br/><br/>
                {displayData}
            </div>
    </>
  );
}
