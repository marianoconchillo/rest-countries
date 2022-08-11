import { Route, Routes } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ResultScreen from "./screens/ResultScreen";

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
          <Route path="results" element={<ResultScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
