import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedCountriesFlags,setVisitedCountriesFlags]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data=>setCountries(data))
    },[])
const handleVisitedCountry = country =>{

    //console.log('i add the visited countries')
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
}

const handleVisitedCountriesFlags = flag =>{
    const newVisitedCountriesFlags = [...visitedCountriesFlags,flag]
    setVisitedCountriesFlags(newVisitedCountriesFlags)
}

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country =><li key={country}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedCountriesFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
                }
            </div>

            
           <div className="country-container">
           {
                countries.map(country =><Country handleVisitedCountry={handleVisitedCountry} handleVisitedCountriesFlags={handleVisitedCountriesFlags} key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;