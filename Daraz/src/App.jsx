import React from "react";
import Header from './components/theme/header/Header'
import Footer from './components/theme/footer/Footer'
import './App.css';
import  Router  from './Router/Router';
function App() {
  return (
    <>
        <Header />
        <Router />
        <Footer />

    </>
  );
}
export default App;