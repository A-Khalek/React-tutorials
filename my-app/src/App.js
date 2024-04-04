import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error'
import Services from './components/Services'
import Navabr from './components/Navbar'
import Post from './components/Post'
function App() {
  return (
    <>
    <Router>
    <Navabr/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servics" element={<Services />}/>
          <Route path="/post/:category/:subcategory" element={<Post/>} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
