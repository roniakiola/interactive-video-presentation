import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './views/Home';
import Videos from './views/Videos';
import UploadVideo from './views/UploadVideo';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/upload' element={<UploadVideo />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
