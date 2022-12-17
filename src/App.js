import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto ">
      <nav className='bg-gray-100 flex gap-4'>
        <Link to="/invoice">Invoice</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
