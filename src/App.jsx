import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <Route path="/mail" element={}/> */}
    </Routes>
    </>
  )
}

export default App
