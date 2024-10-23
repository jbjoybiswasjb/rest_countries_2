import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    // State Data.
    const [countries, setCountries] = useState([]);

    // Load data.
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>All Countries: {countries.length}</h2>

            {
                countries.map(country => <Country 
                    country={country} key={country?.cca3}>
                </Country>)
            }
        </div>
    );
};

export default Countries;