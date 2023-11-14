import { BrowserRouter as Router, Routes, Route}  from "react-router-dom"
import LandingPage from './Features/LandingPage';
import Board from "./Dashboard/Board";
import Supplier from "./Dashboard/Supplier";
import Company from "./Dashboard/Company";


const App = () => {
  return (
   <Router>
    <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path="/Board" element={<Board/>}/>
      <Route path="/Supplier" element={<Supplier/>} />
      <Route path="/Company" element={<Company/>}/>
    </Routes>
   </Router>
  )
}

export default App
