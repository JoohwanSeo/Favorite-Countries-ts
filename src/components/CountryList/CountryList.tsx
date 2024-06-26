import { useEffect, useState } from 'react';
import { CountriesInfo } from '../../types/country.type';
import api from '../../api/api';
import CountryCard from '../CountryCard';

const CountryList = () => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);
  const [checkedCountry, setCheckedCountry] = useState<boolean>(true)

  useEffect(() => {
    const fetchCountries = async() => {
      const getCountryData = await api.country.getCountry()
      setCountries(getCountryData || [])
      setCheckedCountry(false)
    }
    fetchCountries()
  }, [])

  const handleChangeCountry = (country: CountriesInfo) => {
    const clickedCountry = countries.map((prevCountry) => 
      prevCountry.name.common === country.name.common ?
      {...prevCountry, checked: !prevCountry.checked} : prevCountry
    )
    setCountries(clickedCountry)
  }

  if(checkedCountry) {
    return (
      <div> ...is Pending </div>
    )
  }


  return (
    <>
      <h3>Favorite Countries</h3>
      <ul>
        {countries.map((country) => {
          if(country.checked)
            return (
          <li key={country.name.common}
          onClick={() => handleChangeCountry(country)}
          >
            <CountryCard country={country}  />
          </li>
        )
        })}
      </ul>
      <h3>Countries</h3>
<ul>
  {countries.map((country) => {
    if(!country.checked)
      return(
    <li key={country.name.common}
    onClick={() => handleChangeCountry(country)}
    >
      <CountryCard country={country} />
    </li>
      )
  }) }
</ul>

     
    </>
  );
};

export default CountryList;
