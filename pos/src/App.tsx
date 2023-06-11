import Customers from './pages/customers';
import CreateCustomer from './pages/createCustomer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Customers />} />
        <Route path='/create' element={<CreateCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
