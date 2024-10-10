import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
  import LogIn from './Login/LogIn.jsx';
import NotFound from './Landing_page/NotFound.jsx';
import Dashboard from './Dashboard/Hero/Dashboard.jsx';
import App from './App.jsx'
import './index.css'
import SignIn from './SignIn/SignIn.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)
