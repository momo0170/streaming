import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <>
      <Header />
      <div className="flex m-3">
        <MenuBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
