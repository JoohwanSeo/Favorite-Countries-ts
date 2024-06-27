import CountryList from './components/CountryList';
import ToggleBtn from './components/DarkMode/ToggleBtn';

const App = () => {
  return (
    <div className="flex-directionL row justify items-center min-w-[400px]">
      <ToggleBtn />
      <CountryList />
    </div>
  );
};

export default App;
