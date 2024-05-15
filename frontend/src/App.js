import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";

function App() {
  const {loading ,portfolioData} = useSelector((state)=>state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
    const res = await fetch('/api/portfolio/get-portfolio-data');
    const data = await res.json();
    dispatch(SetPortfolioData(data));
    dispatch(HideLoading());

    if(data.error){
      throw new Error("Erorr", data.error)
  }
    } catch (error) {
      console.log("Error in api call :" ,error)
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);



  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
