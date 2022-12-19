import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Dogs from "./pages/dogs";
import Cats from "./pages/cats";
import MainForm from "./pages/Form/MainForm";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import TabPage from "./pages/Tabs";
import Testimonials from "./pages/Testimonials/Testimonials";
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const changeNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="root">
      <NavBar callBack={changeNavigation} />

      {currentPage === "home" ? <Home callBack={changeNavigation} />:null}
      {currentPage === "dogs" ? <Dogs callBack={changeNavigation} /> : null}
      {currentPage === "cats" ? <Cats callBack={changeNavigation} /> : null}
      {currentPage === "about" ? <About callBack={changeNavigation}/>:null}
      
      {currentPage=== "form" ? <MainForm callBack={changeNavigation}/>: null}
      {currentPage==="Privacy" && <Privacy />}
      {currentPage==="Terms" && <Terms />}
      {currentPage==="Contact" && <Contact />}
      {currentPage==="tabs" && <TabPage />}
      {currentPage==="Testimonials" &&<Testimonials />}
      <Footer callBack={changeNavigation} />
    </div>
  );
}

export default App;

