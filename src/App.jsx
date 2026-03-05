import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Logar from "./pages/Logar"
import Cadastrar from "./pages/Cadastrar";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Logar" element={<Logar/>}/>
        <Route path="/Cadastrar" element={<Cadastrar/>}/>
      </Routes>
    </Router>
  )
}