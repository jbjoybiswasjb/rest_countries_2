import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    // State Data.
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    // Load data.
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])



    // Handle visited country.
    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    // Handle visited flags.
    const handleVisitedFlags = (countryFlag) => {
        const newVisitedFlags = [...visitedFlags, countryFlag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h2>All Countries: {countries.length}</h2>

            <div>
                <h2>Visited countries : {visitedCountries.length}</h2>
                <ul>
                    {visitedCountries.map(visitedCountry =>
                        <li key={visitedCountry?.cca3}>
                            {visitedCountry?.name?.common}
                        </li>)}
                </ul>
            </div>

            <div>
                {
                    visitedFlags.map((visitedFlag, index) =>
                        <img
                            style={{height: '8rem', width: 'auto', margin: '1rem'}}
                            src={visitedFlag} alt=""
                            key={index}
                        />
                    )
                }
            </div>

            <div className='countries_grid'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country?.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlags={handleVisitedFlags}
                        >
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;