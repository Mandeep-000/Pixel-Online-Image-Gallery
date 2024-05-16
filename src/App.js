import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
import ScrollToTop from "./Page/Scroll";

function App() {
  
  return (
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          
        </Routes>
      </BrowserRouter>

  );
}
export default App;