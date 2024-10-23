import { useState } from 'react';
import './Country.css';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;


    const [visit, setVisit] = useState(false);

    const handleVisit = () => {
        setVisit(!visit);
    }

    return (
        <div className={`country_css ${visit ? 'visited_bg' : 'going_bg'}`}>
            <h3>Country Name: {name?.common}</h3>
            <div style={{
                height: 'auto',

            }}>
                <img src={flags?.png} alt="" style={{
                    height: '9rem',
                    width: 'auto'
                }} />
            </div>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>



            <button onClick={() => handleVisitedCountry(country)} style={{marginRight: '.5rem'}}>Mark Visited</button>

            <button onClick={()=> handleVisitedFlags(country?.flags?.png)}>Visited Flag</button>


            {visit ? <p>Visited</p> : <p>Not Visited</p>}

            <button onClick={handleVisit} className={visit ? 'visited_btn' : 'not_visited_btn'}>{visit ? 'Visited' : 'Going'}</button>

            <hr />
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetails>
        </div>
    );
};

export default Country;