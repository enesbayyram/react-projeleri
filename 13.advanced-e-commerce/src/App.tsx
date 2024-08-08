import { useEffect, useState } from 'react'
import './App.css'
import RouterConfig from './router/RouterConfig'
import Spinner from './components/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import storageService from './services/StorageService';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import BasketDetails from './components/BasketDetails';

function App() {

  // 4 ay 24 gün kaldı hedeflerin bitme süresi

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = storageService.read("currentUser");
    if (!currentUser && window.location.pathname !== '/register') {
      navigate("/login");
    }
  }, [])

  return (
    <div className='App' style={{ height: '100vh' }}>
      {storageService.read("currentUser") && <Navbar />}
      <Spinner />
      <ToastContainer autoClose={3000} style={{ fontSize: '12px' }} />
      <RouterConfig />
      <BasketDetails />
    </div>
  )
}

export default App
