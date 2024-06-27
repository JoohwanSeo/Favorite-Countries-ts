import { CountriesInfo } from '../../types/country.type';

const CountryCard = ({ country }: { country: CountriesInfo }) => {
  return (
    <>
      <img src={country.flags.png} alt="이미지 오류" />
      <h3 className="text-black">{country.name.common}</h3>
      <p className="text-black">{country.capital}</p>
    </>
  );
};

export default CountryCard;
