import Customers from './pages/customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
