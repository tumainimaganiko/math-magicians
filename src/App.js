import {
  Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';
import Calculator from 'components/Calculator';
import Quotes from 'components/Quotes';
import Navbar from 'components/NavBar';
import Home from 'components/Home';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
}

export default App;
