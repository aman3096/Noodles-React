import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function First({data}) {
  const [search,setSearch] =useState('');
  const [like,setLike]= useState(false)
  const [clicked,setClicked]= useState(false)
  
  const toggleClick=()=>{
      setClicked(!clicked);
  }

  let makeDistinct=Array.from(new Set(data.map(prop=>prop["Top Ten"])))
   .map(id=>{
     return {
       Brand: data.find(s=>s["Top Ten"]===id).Brand,
       Variety: data.find(s=>s["Top Ten"]===id).Variety,
       Style: data.find(s=>s["Top Ten"]===id).Style,
       Country: data.find(s=>s["Top Ten"]===id).Country,
       Stars: data.find(s=>s["Top Ten"]===id).Stars,
       id:id,
     }
   })
   
   const searchIt=(e)=>{
     setSearch(e.target.value)
   }
   makeDistinct = makeDistinct.filter((contact)=>{
     return contact.Brand.indexOf(search) !== -1;
   })

  const articlesJsx = makeDistinct.map((item, index) => {
      const style1=(index%2==1)?"#4287f5":"#53afb5";
    
      return (
        <div className="col-md-4 col-sm-12" style={{backgroundImage:"url('https://wallpapercave.com/wp/wp2393879.jpg')", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          
            <br/>
                <div className="card " style={{borderRadius:'10px',background:style1,marginLeft:'10%',marginRight:"40%",width:'100%',fontColor:'gray',border:"none"}}>
                    <h6>
                      <center style={{width:'120px'}}>{Object.values(item)[0]}</center></h6>
                     
                    <center onClick={toggleClick} src={Object.values(item)[2]} className="card-img-top">Variety {Object.values(item)[1]}</center>
                    <div className="card-body" id="cardBody">
                    <h4 className="card-title">
                    <Link to={String(Object.values(item)[3])} style={{color:'white'}}>
                      {Object.values(item)[3]!==NaN?Object.values(item)[3]:null}
                      </Link>
                    </h4>
                    <span className="card-text" style={{display:'block',fontSize:'30px',fontFamily:'Metropolis-Light',color:index%2?'black':'white'}}>{Object.values(item)[4]}</span>
                    <span className="card-title">
                      {Object.values(item)[5]}
                    </span>
                    </div>
              </div>
          </div>
          
          
         
     )});

  
  
  return (
    <div>
      <h1 style={{marginLeft:"55%",color:"black"}}>{"Country Top Ramen"}</h1>
      <br/><br/>
      <center>
      <input 
        name="search"
        style={{width:'30%'}}
        value={search}
        className="input-group-text" 
        onChange={searchIt}
        onClick={searchIt} placeholder="Search Brand Name here..."></input>
    <br/>
      </center>

      <div className="row" style={{backgroundImage:"url('https://wallpapercave.com/wp/wp2393879.jpg')", backgroundRepeat: "no-repeat",backgroundSize: "cover"}} style={{margin:'0 20%'}}>
      {articlesJsx.length==0?"No resuls found. Try searching different brand.": articlesJsx}
      </div>    
    </div>
  );
}
