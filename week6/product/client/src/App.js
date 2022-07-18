import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import ViewProduct from './components/ViewProduct'
import UpdateProduct from './components/UpdateProduct';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Main/>}/>
              <Route path="/products/:id" element={<ViewProduct/>} />
              <Route path="/products/:id/edit" element={<UpdateProduct/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;