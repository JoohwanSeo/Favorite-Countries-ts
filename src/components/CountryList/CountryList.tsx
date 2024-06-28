import { useEffect, useState } from 'react';
import { CountriesInfo } from '../../types/country.type';
import api from '../../api/api';
import CountryCard from '../CountryCard';
import ToggleBtn from '../DarkMode/ToggleBtn';

const CountryList = () => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);
  const [checkedCountry, setCheckedCountry] = useState <boolean> (true);

  useEffect(() => {
    const fetchCountries = async () => {
      const getCountryData = await api.country.getCountry();
      setCountries(getCountryData || []);
      setCheckedCountry(false);
    };
    fetchCountries();
  }, []);

  const handleChangeCountry = (country: CountriesInfo) => {
    const clickedCountry = countries.map(prevCountry =>
      prevCountry.name.common === country.name.common ? { ...prevCountry, checked: !prevCountry.checked } : prevCountry,
    );
    setCountries(clickedCountry);
  };

  if (checkedCountry) {
    return <div className="text-6xl"> ...is Pending </div>;
  }

  return (
    <>
    <ToggleBtn />
      <h2 className="mt-8 mb-4 font-bold text-4xl  ">Favorite Countries</h2>
      <ul className="grid grid-cols-4 gap-4">
        {countries.map(country => {
          if (country.checked)
            return (
              <li
                key={country.name.common}
                onClick={() => handleChangeCountry(country)}
                className="p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white rounded-lg"
              >
                <CountryCard country={country} />
              </li>
            );
        })}
      </ul>
      <h2 className="font-bold mx-1 mt-8 mb-4 text-4xl">Countries</h2>
      <ul className="mx-3 grid grid-cols-4 gap-4 max-w-full ">
        {countries.map(country => {
          if (!country.checked)
            return (
              <li
                key={country.name.common}
                onClick={() => handleChangeCountry(country)}
                className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white rounded-lg"
              >
                <CountryCard country={country} />
              </li>
            );
        })}
      </ul>
    </>
  );
};

export default CountryList;
