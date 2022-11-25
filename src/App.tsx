import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './views/Home';

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
