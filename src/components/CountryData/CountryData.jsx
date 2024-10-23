const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h3>Country Data</h3>
            <small>Name: {country?.name?.common}</small>
        </div>
    );
};

export default CountryData;