import useCountries from "./hooks/useCountries";

// Components 
import Card from "./components/Card";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Search from "./components/Search";

const App = () => {

  const { isLoading, countries } = useCountries();

  return (
    <>
      <Header />
      <Search />

      {isLoading ? (
        <Loader />
      ) : (
        countries.map((country, idx) => {
          return (
            <div className="container p-6 px-12 sm:flex" key={idx}>
                <Card country={country}/>
            </div>
          );
        })
      )}


    </>
  );
}

export default App;
