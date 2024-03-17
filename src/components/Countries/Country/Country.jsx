
import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedCountriesFlags}) => {
    //console.log(country,handleVisitedCountry)
    const {name,flags,population,area,cca3} = country
    const [visited,setVisited] = useState(false)
    const handleVisited = ()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited?'visited':'non-visited'}`}>
            <h3 style={{color:visited?'salmon':'rebeccapurple'}}>Name:{name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedCountriesFlags(country.flags.png)}> Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {visited?'i have visited this country':'i want to visit this country'}
            
        </div>
    );
};

export default Country;