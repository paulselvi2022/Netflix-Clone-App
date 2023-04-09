import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
function App() {
  return (
    <BrowserRouter>
    <div className="App">  
    <ScrollToTop />   
          <Routes>         
           
           <Route exact path="/" component={Home} />
           <Route path="/netflix-show" component={NetFlixShow} />  
                 
          </Routes>
          <Home />
          <NetFlixShow />
          <Footer />
          </div>           
            </BrowserRouter >  
               
           
    
  );
}

export default App;
