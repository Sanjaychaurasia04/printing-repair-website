import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;