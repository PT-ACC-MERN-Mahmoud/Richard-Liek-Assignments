
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:input' element={<NumberOrWord/>}/>
          <Route path='/:input/:textColor/:bgColor' element={<NumberOrWord/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
