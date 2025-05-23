import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error'
import Services from './components/Services'
import Navabr from './components/Navbar'
import Post from './components/Post'
import Login from './components/Login'
import Card from './components/Card'


function App() {
  const isLogedIn = true;
  return (
    <>

    <Card/>
    <Card/>
    <Card/>

    <Router>
    <Navabr/>
      <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servics" element={<Services number="5" />} /> */}
          {/* <Route path="/post/:category/:subcategory" element={<Post/>} />   this is send route parameters */}
          {/* <Route path="/login" element={ isLogedIn ? <Login/> : <Home />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
