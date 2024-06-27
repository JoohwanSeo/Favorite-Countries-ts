import { CountriesInfo } from '../../types/country.type';

const CountryCard = ({ country }: { country: CountriesInfo }) => {
  return (
    <>
      <img src={country.flags.png} alt="이미지 오류" className="items-center object-cover" />
      <h3 className="text-black font-bold antialiased">{country.name.common}</h3>
      <p className="text-black font-light subpixel-antialiased">{country.capital}</p>
    </>
  );
};

export default CountryCard;
