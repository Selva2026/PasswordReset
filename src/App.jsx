import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import UpdatePwr from './Components/UpdatePwr';
import SendLink from './Components/SendLink';
import NotFound from './Components/notFound';
import NavBar from './Components/NavBar';

import './App.css'


function App() {
  

  return (
    <>
    
  
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sendlink" element={<SendLink />} />
        <Route path="/updatepwr/:token" element={<UpdatePwr />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
