import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./components/Home";
import Converter from "./components/Converter";
import FiatConverter from "./components/FiatConverter";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/converter" element={<Converter/>}/>
          
          <Route path="/fiat-converter" element={<FiatConverter/>}/>
            
      </Routes>
    </BrowserRouter>
  );
};

export default App;
