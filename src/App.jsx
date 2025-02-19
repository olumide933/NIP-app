import Header from "./assets/components/Header/Header";
import Home from "./pages/Home/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About/About";
import Features from "./pages/features/Features";
import Career from "./pages/career/Career";
import {Provider} from "react-redux"
import {myStore} from "./Services/Store"
import Company from "./pages/company/Company";

const App = () =>{
  return(
    <div>
      <BrowserRouter>
      <Provider store={myStore}>
      <Header/ >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/feature" element={<Features />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Company" element={<Company />} />
      </Routes>
      </Provider>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;