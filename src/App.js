import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
