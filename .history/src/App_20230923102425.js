import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <>
      <Header />
      <main>
        <MenuBar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
