import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./component/About";
import Main from "./pages/Main"; // If Main is your home page
import Articles from "./component/Articles";
import Contact from "./component/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      {/* Header should always be visible */}
      <Header />

      {/* Routes handle page navigation */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

      {/* Footer should always be visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
