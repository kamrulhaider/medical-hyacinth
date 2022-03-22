import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './pages/Home/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import SingleDoctor from './pages/SingleDoctor/SingleDoctor';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:doctorsKey" element={<SingleDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
