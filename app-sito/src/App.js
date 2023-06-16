import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
import HeaderNav from './components/HeaderNav';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
          <HeaderNav />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/users" element={<Users />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
