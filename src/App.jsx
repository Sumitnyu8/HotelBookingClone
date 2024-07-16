import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/Lists/List";



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/lists' element={<List/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
