import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading ,ReloadData} from "./redux/rootSlice";
import Admin from "./pages/Admin/index.js";

function App() {
  const {loading ,portfolioData,reloadData} = useSelector((state)=>state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
    const res = await fetch('/api/portfolio/get-portfolio-data');
    const data = await res.json();
    dispatch(SetPortfolioData(data));
    dispatch(ReloadData(false))
    dispatch(HideLoading());

    if (data.error) {
      throw new Error(data.error); // Corrected the error syntax
    }
    } catch (error) {
      console.log("Error in API call:", error);
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

   useEffect(()=>{
    if(reloadData){
      getPortfolioData()
    }
   },[reloadData])


  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
