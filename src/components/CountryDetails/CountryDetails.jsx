import CountryData from "../CountryData/CountryData";

const CountryDetails = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h3>Country Details</h3>
            <hr />

            <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;