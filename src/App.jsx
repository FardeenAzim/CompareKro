import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreditCards from "./pages/CreditCards";
import Navbar from "./components/Navbar"
import Insurance from "./pages/Insurance";
import Investments from "./pages/Investments";
import PersonalLoans from "./pages/PersonalLoans";
import BankAccounts from "./pages/BankAccounts";
import MutualFunds from "./pages/MutualFunds";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/investments" element={<Investments />}/>
        <Route path="/personal-loans" element={<PersonalLoans />}/>
        <Route path="/bank-accounts" element={<BankAccounts />}/>
        <Route path="/mutual-funds" element={<MutualFunds />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/compare" element={<Compare />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App