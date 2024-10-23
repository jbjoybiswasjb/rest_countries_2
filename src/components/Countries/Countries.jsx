import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

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

            <div className='countries_grid'>
                {
                    countries.map(country => <Country
                        country={country} key={country?.cca3}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;