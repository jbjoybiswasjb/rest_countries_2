import { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;

    
    const [visit, setVisit] = useState(false);

    const handleVisit = () => {
        setVisit(!visit);
    }


    return (
        <div className="country_css">
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

            {visit ? <p>Visited</p> : <p>Not Visited</p>}

            <button onClick={handleVisit} className={visit ? 'visited_btn' : 'not_visited_btn'}>{ visit ? 'Visited' : 'Going'}</button>
        </div>
    );
};

export default Country;