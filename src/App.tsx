import { Route, Routes } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

// Components 
import Header from "./components/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {

  const { theme: { background, text } } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div className="px-10 mx-auto min-h-screen" style={{ backgroundColor: background, color: text }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="details" element={<DetailScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
