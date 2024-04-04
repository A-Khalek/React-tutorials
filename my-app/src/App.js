import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error'
import Services from './components/Services'
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/servics" element={<Services />}/>
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
