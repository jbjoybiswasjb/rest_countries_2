const CountryData = (props) => {
    const { country} = props;
    return (
        <div>
            <h3>Country Data</h3>
            <small>Name: {country?.name?.common}</small>
        </div>
    );
};

export default CountryData;