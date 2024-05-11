import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const[loading ,setLoading] =useState(false);
  return (
   <BrowserRouter>
   {loading ? <Loader /> : null}
   <Routes>
    <Route path="/" element = {<Home />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
