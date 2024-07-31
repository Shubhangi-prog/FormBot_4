import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Workspace from "./pages/Workspace";
import Theme from "./pages/Theme";
import Response from "./pages/Response";
import Folders from "./pages/Folders";
import Share from "./pages/Share";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" theme="colored" closeButton={false} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/folder/:fid' element={<Folders />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/workspace' element={<Workspace />} />
        <Route path='/theme' element={<Theme />} />
        <Route path='/response' element={<Response />} />
        <Route path='/share/:wid' element={<Share />} />
      </Routes>
    </Router>
  )
}

export default App
