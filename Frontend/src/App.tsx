import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./pages/signup/Signup"
import Signin from "./pages/signin/Signin"


function App() {
  

  return (
   <Router>
    <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/" element= {<Signin/>}/>
      </Routes>
    <Footer/>
   </Router>
  )
}

export default App
