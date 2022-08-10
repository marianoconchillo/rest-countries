import { Route, Routes } from "react-router-dom";

// Hook
import useCountries from "./hooks/useCountries";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

// Components 
import Header from "./components/Header";

const App = () => {

  return (
    <>
      <Header />
      <div className="px-10 mx-auto">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="details" element={<DetailScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
