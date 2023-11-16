import { BrowserRouter as Router, Routes, Route}  from "react-router-dom"
import LandingPage from './Features/LandingPage';
import Board from "./Dashboard/Board";
import Supplier from "./Dashboard/Supplier";
import Company from "./Dashboard/Company";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import Product from "./Dashboard/Product";


const App = () => {
  return (
   <Router>
    <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path="/Board" element={<Board/>}/>
      <Route path="/Supplier" element={<Supplier/>} />
      <Route path="/Company" element={<Company/>}/>
        <Route path="/Product" element={<Product/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>

    </Routes>
   </Router>
  )
}

export default App
