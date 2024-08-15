import { useEffect, useState } from "react";

const CountryCard = ({name,flag,abbr}) => {
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"4px",
            border:"1px solid black",
            borderRadius:"8px",
            height:"200px",
            width:"200px",
            margin:"10px",
            padding:"10px",
            textAlign:"center",
        }}
            >
            <img 
            src = {flag}
            alt={abbr}
            style={{
                width:"100px",
                height:"100px"
            }} />
            <h2>{name}</h2>
        </div>
    )
}
const API_URL ="https://xcountries-backend.azurewebsites.net/all";
function Countries(){
    const [countries , setcountries]= useState([])
    useEffect(() => {
        // fetch the data
    const fetchData =async () =>{
        try{
            const response = await fetch(API_URL);
            const jsonREs = await response.json();
            setcountries(jsonREs);
        }catch(error)
        {
            console.error("Error fetching data:",error)
        }
        
    };
    fetchData();
    },[])
    // const temp =[1,2,3,4,5,6,7,8];
    return(
        <div style={{
            display:"flex",
            flexWrap:"wrap"
        }}>
            {
                countries.map((country) => (
                    <CountryCard key={country.abbr} name={country.name} flag={country.flag} abbr={country.abbr} />
                ))
            }
        </div>
    );
}
export default Countries;